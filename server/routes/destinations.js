const express = require("express");
const cors = require("cors");

const router = express.Router();

const Destination = require("../models/destination");
const Country = require("../models/country");

router.use(cors());

router.post("/search-country", async (req, res) => {
  const country = req.body.country;

  Country.findOne({
    attributes: ["id"],
    where: { countryName: country },
  })
    .then((result) => {
      if (result === null) {
        res.json({ error: "Not found" });
      } else {
        res.json(result);
      }
    })
    .catch((error) => {
      res.status(400).send("Bad request");
      console.log("Bad request", error);
    });
});

module.exports = router;

router.post("/search-destination", async (req, res) => {
  const destination = req.body.destination;
  const countryId = req.body.countryId;

  Destination.findOne({
    attributes: ["id"],
    where: { countryId: countryId, name: destination },
  })
    .then((result) => {
      if (result === null) {
        res.json({ error: "Not found" });
      } else {
        res.json(result);
      }
    })
    .catch((reason) => {
      res.status(400).send("Bad request");
      console.log("Bad request", reason);
    });
});
