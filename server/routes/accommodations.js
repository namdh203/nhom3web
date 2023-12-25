const express = require('express');
const accommodations = express.Router();
const cors = require("cors");
const Sequelize = require("sequelize");

const Accommodation = require("../models/accommodation");

accommodations.use(cors());

accommodations.post('/randomAccommodation', (req, res) => {
    const accomId = req.body.accomId;
    Accommodation.findOne({
        where: {
            id: accomId
        }
    }).then(randAccom => {
        if (!randAccom) {
            console.log("No such accom id found!");
        } else {
            const responseData = {
                id: randAccom.id,
                name: randAccom.name,
                destId: randAccom.destId,
                pricePerNight: randAccom.pricePerNight,
                priceCurrency: randAccom.priceCurrency,
                address: randAccom.address,
                telephone: randAccom.telephone,
                contactEmail: randAccom.contactEmail,
                description: randAccom.description,
                additionInfo: randAccom.additionInfo,
                demoImage: randAccom.demoImage,
            };
            res.json(responseData)
        }
    }).catch (e => {
        res.send("error: " + e);
    })
})

// admin
accommodations.post('/admin/getAllAccommodation', (req, res) => {
    Accommodation.findAll({
      limit: 50
  })
  .then(accommodations => {
      if (accommodations) {
          const responseData = accommodations.map(accommodation => ({
              id: accommodation.id,
              name: accommodation.name,
              destId: accommodation.destId,
              pricePerNight: accommodation.pricePerNight,
              priceCurrency: accommodation.priceCurrency,
              address: accommodation.address,
              telephone: accommodation.telephone,
              contactEmail: accommodation.contactEmail,
              description: accommodation.description,
              additionInfo: accommodation.additionInfo,
          }));
          res.json(responseData);
      } else {
          res.status(400).json({ error: 'No accommodation found' });
      }
  })
  .catch(err => {
      res.status(500).json({ error: err.message });
  });
});

module.exports = accommodations;
