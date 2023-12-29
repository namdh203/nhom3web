const express = require("express");
const payments = express.Router();
const cors = require("cors");

const Payment = require("../models/payment");

payments.use(cors());

payments.post("/createTransaction", (req, res) => {
    const paymentData = {
        userId: req.body.userId,
        payDate: req.body.payDate,
        amount: req.body.amount,
        currency: req.body.currency,
        description: req.body.description
    }
    Payment.create(paymentData).then(payment => {
        res.json("Payment transaction created");
    }).catch(err =>{
        res.send("Error when create payment transaction to db: " + err);
    })
})

module.exports = payments;