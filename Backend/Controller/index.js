import express from 'express'
import authSystem from '../Services/auth.js'
import adminServices from '../Services/admin.js'
import productServices from '../Services/product.js'
import Middleware from '../Middlewear/index.js'

const router = express.Router()

router.use('/authsystem', authSystem)
router.use('/adminservices', adminServices)
router.use('/productservices', productServices)


export default router