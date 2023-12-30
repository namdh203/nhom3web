const express = require("express");
const cors = require("cors");
const { sequelize, Sequelize } = require("../database/db");
const router = express.Router();

const Destination = require("../models/destination");
const Country = require("../models/country");
const CountryMonthlyAdvice = require("../models/country_monthly_advice");
const DestAccom = require("../models/dest_accom")
const DestTrans = require("../models/dest_trans")
const DestRest = require("../models/dest_restaurant")
const DestAct = require("../models/dest_activity")

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
    limit: 4,
  })
    .then((results) => res.json({ results: results }))
    .catch((reason) => {
      res.status(400).send("Bad request");
      console.log("Bad request", reason);
    });
});

// admin
router.post("/admin/getAllDestination", (req, res) => {
  Destination.findAll({
    limit: 50,
  })
    .then((router) => {
      if (router) {
        const responseData = router.map((destination) => ({
          id: destination.id,
          name: destination.name,
          countryId: destination.countryId,
          description: destination.description,
          additionInfo: destination.additionInfo,
          demoImage: destination.demoImage
        }));
        res.json(responseData);
      } else {
        res.status(400).json({ error: "No destination found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/admin/addDestination', async (req, res) => {
  const new_destination = req.body.new_destination;

  try {
    const createdDestination = await Destination.create({
      name: new_destination.name,
      countryId: new_destination.countryId,
      description: new_destination.description,
      additionInfo: new_destination.additionInfo,
      demoImage: new_destination.demoImage,
    });

    for (const accomId of new_destination.accomId) {
      await DestAccom.create({
        accomId: accomId,
        destId: createdDestination.id
      });
    }

    for (const restId of new_destination.restId) {
      await DestRest.create({
        restId: restId,
        destId: createdDestination.id
      });
    }

    for (const transId of new_destination.transId) {
      await DestTrans.create({
        transId: transId,
        destId: createdDestination.id
      });
    }

    for (const actId of new_destination.actId) {
      await DestAct.create({
        activityId: actId,
        destId: createdDestination.id
      });
    }

    res.json({
      msg: 'Destination added successfully',
      destination: {
        id: createdDestination.id,
        type: createdDestination.type,
        additionInfo: createdDestination.additionInfo,
        demoImage: createdDestination.demoImage,
      }
    });
  } catch (error) {
    console.error('Error adding tour:', error);
    res.status(400).json({ error: 'Error adding tour' });
  }
});

router.post("/get-advice", (req, res) => {
  const countryId = req.body.countryId;
  CountryMonthlyAdvice.findAll({
    where: {
      countryId: countryId,
    },
  })
    .then((results) => res.json(results))
    .catch((reason) => {
      res.status(400).send("Bad request");
      console.log("Bad request", reason);
    });
});

router.post("/get-advice", (req, res) => {
  const countryId = req.body.countryId;
  CountryMonthlyAdvice.findAll({
    where: {
      countryId: countryId,
    },
  })
    .then((results) => res.json(results))
    .catch((reason) => {
      res.status(400).send("Bad request");
      console.log("Bad request", reason);
    });
});

module.exports = router;
