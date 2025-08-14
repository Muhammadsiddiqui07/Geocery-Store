import express from 'express';
import cors from 'cors';
import router from "./routers/index.js";
import dotenv from 'dotenv';
import session from 'express-session';
import mongoose from './Db/index.js';
import chalk from 'chalk';


dotenv.config();

const app = express()

const db = mongoose.connection;

db.on("error ", console.error.bind(console, chalk.bgRed(" Connection error:")));
db.once("open", function () {
    console.log(chalk.bgWhite.black(" DB connected!"));
});

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
    console.log(chalk.bgBlue.white(`Server is running on port ${4000}`));
})