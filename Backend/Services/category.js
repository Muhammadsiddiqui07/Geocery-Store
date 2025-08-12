import express from 'express'
import Category from '../Schema/Category'

const router = express.Router()

router.get('/getallcategory', async (req, res) => {
    try {
        const allCategory = await Category.find({})
        if (!allCategory) {
            return res.status(404).send({ message: 'No category Found!' })
        }
        return res.status(200).send({ message: 'Category Found Successfully!', allCategory })
    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error' })
    }
})

router.get('/getsinglecategory', async (req, res) => {
    try {
        const { name } = req.body
        if (!name) return res.status(400).send({ message: 'Bad request!' })

        const requiredCategory = await Category.find({ name: name })
        if (!requiredCategory) {
            return res.status(404).send({ message: 'category not found!' })
        } else {
            return res.status(200).send({ message: 'category found!', requiredCategory })
        }
    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error' })
    }
})

router.post('/addcategory', async (req, res) => {
    try {
        const { name, image } = req.body
        if (!name && !image) return res.status(400).send({ message: "bad request" })
        const existingCategory = await Category.find({ name: name })
        if (existingCategory) {
            return res.status(401).send({ message: 'Category already exist' })
        }
        const newCategory = new Category({ name: name, image: image })
        await newCategory.save()
        return res.status(200).send({ message: 'category Added Successfully' })
    } catch (err) {
        return res.status(401).send({ message: 'Interval server Error' })
    }
})

router.put('/updatecategory', async (req, res) => {
    try {
        const { name, image } = req.body

        if (!name && !image) return res.status(400).send({ message: "bad request" })

        const existingCategory = await Category.findOneAndUpdate(name, { name: name, image: image }, { new: true })

        return res.status(200).send({ message: 'Category Updated Successfully!', existingCategory })

    } catch (err) {

        res.status(400).send({ message: 'Interval Server Error' })

    }
})


router.delete('/deletecategory', async (req, res) => {
    try {
        const { name } = req.body
        if (name) {
            const deleteproduct = await Category.findOneAndDelete(name)
            if (!deleteproduct) {
                return res.status(404).send({ message: 'category not found!' })
            } else {
                return res.status(200).send({ message: 'category Delete Successfully!' })
            }
        } else {
            return res.status(401).send({ message: 'bad request!' })
        }

    } catch (err) {
        return res.status(401).send({ message: 'Internal Server Error', err })
    }
})


export default router