import express from 'express';
import cors from 'cors';
import router from "./routers/index.js";
import dotenv from 'dotenv';
import session from 'express-session';


dotenv.config();
const app = express()

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(express.json()) 

app.use(cors())

app.use('/api', router)

app.listen('4000', () => {
    console.log(`Server is running on port ${4000}`);
})