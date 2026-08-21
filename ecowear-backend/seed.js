const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const seedProducts = [
  {
    name: "Organic Cotton T-Shirt",
    description: "Premium organic cotton t-shirt, comfortable and breathable.",
    price: 899,
    category: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    stock: 15,
    rating: 4.8,
  },
  {
    name: "Eco Summer Dress",
    description: "Eco-friendly summer dress made from sustainable fabric.",
    price: 1899,
    category: "Women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    stock: 12,
    rating: 4.9,
  },
  {
    name: "Sustainable Denim Jeans",
    description: "High-quality denim jeans made from sustainable materials.",
    price: 1999,
    category: "Men",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    stock: 20,
    rating: 4.7,
  },
  {
    name: "Eco Hoodie",
    description: "Warm and cozy hoodie made from recycled materials.",
    price: 2499,
    category: "Women",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    stock: 10,
    rating: 4.8,
  },
  {
    name: "Recycled Fabric Bag",
    description: "Stylish bag made from recycled fabric.",
    price: 699,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
    stock: 25,
    rating: 4.6,
  },
  {
    name: "Eco-Friendly Sneakers",
    description: "Comfortable sneakers made from eco-friendly materials.",
    price: 2499,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    stock: 18,
    rating: 4.9,
  },
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Clear existing products
    await Product.deleteMany({});

    // Insert new products
    const products = await Product.insertMany(seedProducts);
    console.log(`✅ ${products.length} products seeded successfully`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

connectDB();