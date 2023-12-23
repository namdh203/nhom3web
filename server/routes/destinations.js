const express = require("express");
const cors = require("cors");

const router = express.Router();

const Destination = require("../models/destination");

router.use(cors());

router.get("/search-by-name/", async (req, res) => {
  const destination = req.body.dest;
  const result = await Destination.findOne({
    where: { name: destination },
  });
  if (result === null) {
    console.log("Not Found!");
    res.json({ error: "Not found" });
  } else {
    res.json(result);
  }
});

module.exports = router;
