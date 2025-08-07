import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true, 
    },
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: String,
    stock: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('product', productSchema);

export default Product