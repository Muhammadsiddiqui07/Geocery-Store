import express from 'express'
import UserRouter from '../Services/auth.js'
import Middleware from '../Middlewear/index.js'

const router = express.Router()

router.use('/authsystem', UserRouter)


export default router