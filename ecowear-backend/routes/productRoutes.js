const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// PUBLIC ROUTES
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// ADMIN ROUTES (Optional - add auth middleware later)
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;