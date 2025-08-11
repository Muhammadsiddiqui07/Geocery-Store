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

router.get('/getallproduct', async (req, res) => {
    try {
        const allProduct = await Product.find({})
        if (!allProduct) {
            return res.status(400).send({ message: 'Product not found!' })
        } else {
            return res.status(200).send({ message: 'Product Found!', allProduct })
        }
    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error', err })
    }
})


router.get('/getproduct', async (req, res) => {
    try {
        const { productId } = req.body
        const requiredProduct = await Product.findOne({ productId: productId })
        if (!requiredProduct) {
            return res.status(400).send({ message: 'Product not found!' })
        } else {
            return res.status(200).send({ message: 'Product Found!', requiredProduct })
        }
    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error', err })
    }
})

router.put('/updateproduct', async (req, res) => {
    try {
        const { productId, name, price, category, image, rating } = req.body
        const updateData = {};
        if (name) updateData.name = name;
        if (price) updateData.price = price;
        if (category) updateData.category = category
        if (image) updateData.image = image
        if (rating) updateData.rating = rating

        const updateProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true })
        return res.status(200).send({ message: 'Product Updated Successfully!', updateProduct })
    } catch (err) {
        return res.status(400).send({ message: 'Internal server error', err })
    }
})

router.delete('/deleteproduct', async (req, res) => {
    try {
        const { id } = req.body
        if (id) {
            const deleteproduct = await Product.findByIdAndDelete(id)
            if (!deleteproduct) {
                return res.status(404).send({ message: 'Product not found!' })
            } else {
                return res.status(200).send({ message: 'Product Delete Successfully!' })
            }
        } else {
            return res.status(401).send({ message: 'bad request!' })
        }

    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error', err })
    }
})


export default router