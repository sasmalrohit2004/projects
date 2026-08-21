const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Footwear", "Accessories", "All"],
    },
    image: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 10,
    },
    rating: {
      type: Number,
      default: 4.8,
      min: 0,
      max: 5,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);