const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
    res.status(200).send("API is working fine");
});

module.exports = app;``