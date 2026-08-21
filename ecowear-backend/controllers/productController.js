const Product = require("../models/Product");

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category && category !== "All") {
      filter.category = category;
    }

    const products = await Product.find(filter);

    res.json({
      message: "Products fetched successfully",
      count: products.length,
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product fetched successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE PRODUCT (Admin Only - Optional)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock, rating } =
      req.body;

    // Validation
    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      stock,
      rating,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE PRODUCT (Admin Only - Optional)
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const product = await Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE PRODUCT (Admin Only - Optional)
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};