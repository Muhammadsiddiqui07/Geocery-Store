import express from 'express';
import jwt from 'jsonwebtoken';

const app = express.Router();

// Middleware to verify JWT token
app.use((req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'MS');
        req.user = decoded; // Attach user info to request
        console.log('Authorized user:', decoded);
        next(); // Proceed to the next middleware or route
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or Expired Token' });
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'User is authorized', user: req.user });
});

export default app;
