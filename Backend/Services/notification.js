import express from "express";
import Notification from "../models/Notification.js";

const router = express.Router();

// ✅ 1. Get User Notifications
router.get("/user/:userId", async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.params.userId })
            .sort({ createdAt: -1 }); // latest first

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notifications", error });
    }
});

// ✅ 2. Mark Notification as Read
router.put("/:id/read", async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }

        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: "Error marking notification read", error });
    }
});

export default router;
