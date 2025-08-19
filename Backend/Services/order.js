import express from 'express'
import Order from "../Schema/Order.js";


const router = express.Router();


router.post("/addorder", async (req, res) => {
  try {
    const { user, items, shippingAddress, totalAmount } = req.body;

    if (!user || !items || !shippingAddress || !totalAmount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = new Order({
      user,
      items,
      shippingAddress,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Error creating order", error: err.message });
  }
});


router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate("items.product", "name price")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user orders", error: err.message });
  }
});


router.get("/allorder", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("items.product", "name price");

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching all orders", error: err.message });
  }
});


router.put("/status/:id", async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Shipped", "Delivered"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated", order });
  } catch (err) {
    res.status(500).json({ message: "Error updating order", error: err.message });
  }
});


router.delete("/admin/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully (Admin)" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting order", error: err.message });
  }
});


router.delete("/user/:userId/:orderId", async (req, res) => {
  try {
    const { userId, orderId } = req.params;

    const order = await Order.findOneAndDelete({ _id: orderId, user: userId });

    if (!order) {
      return res.status(404).json({ message: "Order not found or not authorized" });
    }

    res.status(200).json({ message: "Order deleted successfully (User)" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting order", error: err.message });
  }
});

export default router;

