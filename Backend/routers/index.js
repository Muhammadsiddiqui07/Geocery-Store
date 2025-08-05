import express from 'express'
import ControllerRouter from '../Controller/index.js'

const router = express.Router()

router.use('/user' , ControllerRouter)

export default router