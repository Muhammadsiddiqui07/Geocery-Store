import express from 'express'
import Product from '../Schema/Product.js'
import multer from "multer";


const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // uploads folder me save hoga
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/addproduct", upload.single("image"), async (req, res) => {
    try {
        const { productId, name, price, category, rating } = req.body;

        // ✅ Check existing product
        const existingProduct = await Product.findOne({ productId });
        if (existingProduct) {
            return res.status(400).send({ message: "Product Already Exists" });
        }

        // ✅ Image ka path save karna
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

        const newProduct = new Product({
            productId,
            name,
            price,
            category,
            image: imagePath,
            rating
        });

        await newProduct.save();

        return res.status(200).send({ message: "Product Added Successfully!" });
    } catch (err) {
        return res.status(500).send({ message: "Internal Server Error", err });
    }
});


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
    console.log("Request body:", req.body); // Debugging line
    try {
        const { productId, name, price, category, image, rating } = req.body;
        const updateData = {};

        if (name) updateData.name = name;
        if (price) updateData.price = price;
        if (category) updateData.category = category;
        if (image) updateData.image = image;
        if (rating) updateData.rating = rating;

        const updateProduct = await Product.findOneAndUpdate(
            { productId: productId },
            updateData,
            { new: true }
        );

        if (!updateProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }

        return res.status(200).send({ message: 'Product Updated Successfully!', updateProduct });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal server error', err });
    }
});

router.delete('/deleteproduct', async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).send({ message: 'Bad request! productId required' });
        }

        const deleteProduct = await Product.findOneAndDelete({ productId: productId });

        if (!deleteProduct) {
            return res.status(404).send({ message: 'Product not found!' });
        }

        return res.status(200).send({ message: 'Product Deleted Successfully!' });
    } catch (err) {
        return res.status(500).send({ message: 'Internal Server Error', err });
    }
});



export default router