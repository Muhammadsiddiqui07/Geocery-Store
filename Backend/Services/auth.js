import express from 'express';
import User from '../Schema/User.js';
import { google } from 'googleapis';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const router = express.Router();


// POST: Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET || 'MS', { expiresIn: '1h' });
        return res.status(200).json({ success: true, message: 'Login successful', user, token });

    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
});

// POST: Signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, phone, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ _id: newUser._id, email: newUser.email }, process.env.JWT_SECRET || 'MS');
        return res.status(201).json({ success: true, message: 'User registered successfully!', user: newUser, token });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});

// POST: Google Login (Step 1 - Redirect to Google)
router.post('/googleLogin', (req, res) => {

    try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URL
        );

        const scopes = ['profile', 'email'];
        const state = crypto.randomBytes(16).toString('hex');
        req.session.state = state;

        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes,
            include_granted_scopes: true,
            state,
        });

        return res.status(200).send({ url })
    } catch (err) {
        return res.send({ message: err.message })
    }
});

router.get('/googleCallback', async (req, res) => {
    try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URL
        );

        const { code } = req.query;

        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
        const { data } = await oauth2.userinfo.get();
        const { email, name } = data;

        res.send({ message: 'Google login successful!', user: data });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});


// DELETE: Delete User (Requires Auth)
router.delete('/delete', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user._id);
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PUT: Update User (Requires Auth)
router.put('/update', async (req, res) => {
    try {
        const { name, phone, password } = req.body;
        const updateData = {};

        if (name) updateData.name = name;
        if (phone) updateData.phone = phone;
        if (password) {
            const hashed = await bcrypt.hash(password, 10);
            updateData.password = hashed;
        }

        const updatedUser = await User.findByIdAndUpdate(req.user._id, updateData, { new: true });
        res.status(200).json({ success: true, message: 'User updated successfully', user: updatedUser });

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

export default router;
