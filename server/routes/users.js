const {Router} = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            "username": "Zero",
            "age": 20
        }, 
        {
            "username": "HaNoi",
            "age": 21
        }
    ])
})

module.exports = router;