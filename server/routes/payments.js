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
    description: req.body.description,
  };
  Payment.create(paymentData)
    .then((payment) => {
      res.json("Payment transaction created");
    })
    .catch((err) => {
      res.send("Error when create payment transaction to db: " + err);
    });
});

payments.post("/getAllPayment", (req, res) => {
  const id = req.body.id;
  Payment.findAll({
    attributes: [
      "id",
      "userId",
      "payDate",
      "amount",
      "currency",
      "description",
    ],
    where: {
      userId: id,
    },
  })
    .then((payments) => {
      if (!payments) {
        res.json({ error: "Not enough payments" });
      } else {
        const responseData = payments.map((payment) => ({
          id: payment.id,
          payDate: payment.payDate,
          amount: payment.amount,
          currency: payment.currency,
          description: payment.description,
        }));

        res.json(responseData);
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

payments.post("/admin/getPaymentHistory", (req, res) => {
  Payment.findAll({
    attributes: [
      "id",
      "userId",
      "payDate",
      "amount",
      "currency",
      "description",
    ],
  })
    .then((payments) => {
      if (!payments) {
        res.json({ error: "Not enough payments" });
      } else {
        const responseData = payments.map((payment) => ({
          id: payment.id,
          payDate: payment.payDate,
          amount: payment.amount,
          currency: payment.currency,
          description: payment.description,
        }));

        res.json(responseData);
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = payments;
