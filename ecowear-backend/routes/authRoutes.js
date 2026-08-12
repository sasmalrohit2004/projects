const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const authController = require("../controllers/authController");

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register new user
 */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully ✅",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 */
router.post("/login", authController.login);

module.exports = router;