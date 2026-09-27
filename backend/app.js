const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cors());

// User Schema
const User = mongoose.model("User", {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    date: { type: Date, default: Date.now }
});

// Signup API
app.post("/signup", async (req, res) => {
    let check = await User.findOne({ email: req.body.email });

    if (check) {
        return res.status(400).json({
            success: false,
            error: "Existing user found with same email address"
        });
    }

    let cart = {};

    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    });

    await user.save();

    const data = {
        user: { id: user.id }
    };

    const token = jwt.sign(data, "secret_ecom");

    res.json({
        success: true,
        token
    });
});

module.exports = app;