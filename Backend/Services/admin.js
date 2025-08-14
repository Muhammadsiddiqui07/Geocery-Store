import express from 'express';
import user from '../Schema/User.js';
import bcrypt  from 'bcrypt'

const router = express.Router()


router.get('/getalluser', async (req, res) => {
    const allUsers = await user.find({})

    if (!allUsers) {
        return res.status(400).send({ message: 'Users not found!' })
    } else {
        return res.status(200).send({ message: 'Users Found!', allUsers })
    }
})


router.get('/getuser', async (req, res) => {
    const { email, _id } = req.body
    const getUser = await user.findById({ _id: _id })
    if (!getUser) {
        return res.status(401).send({ message: 'User not found' })
    } else {
        return res.status(200).status({ message: 'user found successfully!', getUser })
    }
})


// DELETE: Delete User (Requires Auth)
router.delete('/delete', async (req, res) => {
    try {
        const { email } = req.body
        await user.findOneAndDelete({ email: email });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PUT: Update User (Requires Auth)
router.put('/update', async (req, res) => {
    try {
        const { name, phone, password, email } = req.body;
        const updateData = {};

        if (name) updateData.name = name;
        if (phone) updateData.phone = phone;
        if (email) updateData.email = email;
        if (password) {
            const hashed = await bcrypt.hash(password, 10);
            updateData.password = hashed;
        }

        const updatedUser = await user.findByIdAndUpdate(req.body._id, updateData, { new: true });
        res.status(200).json({ success: true, message: 'User updated successfully', user: updatedUser });

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


export default router