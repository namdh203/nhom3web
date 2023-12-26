const express = require("express");
const cors = require("cors");
const { sequelize, Sequelize } = require("../database/db");
const router = express.Router();

const Destination = require("../models/destination");
const Country = require("../models/country");

router.use(cors());

router.post("/search-country", async (req, res) => {
  const query = req.body.query;

  Country.findAll({
    attributes: ["id", "countryName"],
    where: sequelize.where(
      sequelize.fn("lower", sequelize.col("countryName")),
      Sequelize.Op.like,
      `%${query.toLowerCase()}%`
    ),
    limit: 10,
  })
    .then((results) => {
      res.json({ results: results });
    })
    .catch((error) => {
      res.status(400).send("Bad request");
      console.log("Bad request", error);
    });
});

router.post("/search-destination", async (req, res) => {
  const query = req.body.query;
  const countryId = req.body.countryId;

  Destination.findAll({
    attributes: ["id", "name", "additionInfo", "demoImage"],
    where: {
      [Sequelize.Op.and]: [
        sequelize.where(
          sequelize.fn("lower", sequelize.col("name")),
          Sequelize.Op.like,
          `%${query}%`
        ),
        { countryId: countryId },
      ],
    },
    limit: 12,
  })
    .then((results) => res.json({ results: results }))
    .catch((reason) => {
      res.status(400).send("Bad request");
      console.log("Bad request", reason);
    });
});

module.exports = router;
