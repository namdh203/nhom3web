const express = require("express");
const cors = require("cors");

const router = express.Router();

const Destination = require("../models/destination");

router.use(cors());

router.post("/search-by-name", async (req, res) => {
  const destination = req.body.name;
  const result = await Destination.findOne({
    attributes: ["id"],
    where: { name: destination },
  });
  if (result === null) {
    console.log("Not Found!");
    res.json({ error: "Not found" });
  } else {
    res.json(result);
  }
});

// admin
router.post('/admin/getAllDestination', (req, res) => {
  Destination.findAll({
      limit: 50
  })
  .then(router => {
      if (router) {
          const responseData = router.map(destination => ({
              id: destination.id,
              name: destination.name,
              countryId: destination.countryId,
              description: destination.description,
              additionInfo: destination.additionInfo,
          }));
          res.json(responseData);
      } else {
          res.status(400).json({ error: 'No destination found' });
      }
  })
  .catch(err => {
      res.status(500).json({ error: err.message });
  });
});

module.exports = router;
