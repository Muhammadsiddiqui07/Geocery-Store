import express from 'express'
import Product from '../Schema/Product'


const router = express.Router()

router.post('/addproduct', async (req, res) => {
    try {

        const { productId, name, price, category, image, rating } = req.body
        const existingProduct = await Product.findById({ productId })
        if (!existingProduct) {
            return res.status(400).send({ message: "Product Already Exists" })
        }
        else {
            const newProduct = new Product({ productId, name, price, category, image, rating })
            await newProduct.save()
            return res.status(200).send({ message: "Product Added Successfully!" })
        }
    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error', err })
    }
})

export default router