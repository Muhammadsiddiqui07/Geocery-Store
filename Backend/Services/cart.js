import express from 'express';
import Cart from '../Schema/Cart.js';

const router = express.Router();


router.post('/addcart', async (req, res) => {
    try {
        const { userId, pId, quantity } = req.body;
        if (!userId || !pId || !quantity) {
            return res.status(400).send({ message: 'Bad Request - Missing Fields' });
        }

        const addCart = new Cart({ userId, pId, quantity });
        await addCart.save();

        res.status(200).send({ message: 'Cart Added Successfully!' });
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});


router.get('/getcart/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cartItems = await Cart.find({ userId });

        res.status(200).send({ cart: cartItems });
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});


router.put('/updatecart/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        if (!quantity) {
            return res.status(400).send({ message: 'Quantity is required' });
        }

        const updatedCart = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });

        if (!updatedCart) {
            return res.status(404).send({ message: 'Cart Item not found' });
        }

        res.status(200).send({ message: 'Cart Updated Successfully!', cart: updatedCart });
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});


router.delete('/deletecart/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Cart.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).send({ message: 'Cart Item not found' });
        }

        res.status(200).send({ message: 'Cart Item Deleted Successfully!' });
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});


router.delete('/clearcart/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        await Cart.deleteMany({ userId });

        res.status(200).send({ message: 'All Cart Items Cleared Successfully!' });
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});

export default router;
