const express = require("express");
const cors = require("cors");

const router = express.Router();

const Transportation = require("../models/transportation");

router.use(cors());

// admin
router.post('/admin/getAllTransportation', (req, res) => {
    Transportation.findAll({
      limit: 50
  })
  .then(router => {
      if (router) {
          const responseData = router.map(transportation => ({
              id: transportation.id,
              type: transportation.type,
              additionInfo: transportation.additionInfo,
          }));
          res.json(responseData);
      } else {
          res.status(400).json({ error: 'No transportation found' });
      }
  })
  .catch(err => {
      res.status(500).json({ error: err.message });
  });
});

module.exports = router;
