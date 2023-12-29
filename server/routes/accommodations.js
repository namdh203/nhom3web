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
    }).catch(e => {
        res.send("error: " + e);
    })
})

// admin
accommodations.post('/admin/getAllAccommodation', (req, res) => {
    Accommodation.findAll({
        limit: 300
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


accommodations.post('/admin/addAccommodation', async (req, res) => {
    const new_accommodation = req.body.new_accommodation;

    try {
        const createdAccommodation = await Accommodation.create({
            name: new_accommodation.name,
            destId: new_accommodation.destId,
            pricePerNight: new_accommodation.pricePerNight,
            priceCurrency: new_accommodation.priceCurrency,
            address: new_accommodation.address,
            telephone: new_accommodation.telephone,
            contactEmail: new_accommodation.contactEmail,
            description: new_accommodation.description,
            additionInfo: new_accommodation.additionInfo,
        });

        res.json({
            msg: 'Accommodation added successfully',
            accommodation: {
                id: createdAccommodation.id,
                name: createdAccommodation.name,
                destId: createdAccommodation.destId,
                pricePerNight: createdAccommodation.pricePerNight,
                priceCurrency: createdAccommodation.priceCurrency,
                address: createdAccommodation.address,
                telephone: createdAccommodation.telephone,
                contactEmail: createdAccommodation.contactEmail,
                description: createdAccommodation.description,
                additionInfo: createdAccommodation.additionInfo,
            }
        });
    } catch (error) {
        console.error('Error adding tour:', error);
        res.status(400).json({ error: 'Error adding tour' });
    }
});

accommodations.post('/admin/deleteAccommodation', async (req, res) => {
    const old_accommodation = req.body.old_accommodation;

    try {
        const accommodationToDelete = await Accommodation.findByPk(old_accommodation.id);

        if (!accommodationToDelete) {
            res.status(404).json({ error: 'Accommodation not found'});
        }

        await accommodationToDelete.destroy();

        res.json({ msg: 'Accommodation deleted successfully' });
    } catch (error) {
        console.error('Error deleting Accommodation:', error);
        res.status(400).json({ error: 'Error deleting Accommodation' });
    }
});


module.exports = accommodations;
