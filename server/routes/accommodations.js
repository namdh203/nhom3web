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

module.exports = accommodations;

