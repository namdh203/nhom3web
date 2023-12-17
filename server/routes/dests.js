const express = require('express');
const dest = express.Router();
const cors = require("cors");
const Sequelize = require("sequelize");
const bodyParser = require('body-parser');

const DestAccom = require("../models/dest_accom");
const DestActivity = require("../models/dest_activity");
const DestRestaurant = require("../models/dest_restaurant");
const DestTrans = require("../models/dest_trans");

const Accommodation = require("../models/accommodation")
const Transportation = require("../models/transportation");
const Restaurants = require("../models/restaurant");
const Activities = require("../models/activity");

const sequelize = new Sequelize('travelam', 'root', 'empty2003', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

dest.use(cors());
dest.use(bodyParser.json()); 

// Accommodation
dest.post('/accom', (req, res) => {
    const destId = req.body.destId;

    DestAccom.findAll({
        where: {
            destId: destId
        },
        include: [
            {
                model: Accommodation,
                attributes: ['id', 'name', 'demoImage'],
                required: true
            }
        ]
    }).then(destAccoms => {
        if (!destAccoms || destAccoms.length === 0) {
            res.json({ error: 'No accommodations found for the specified destination' });
        } else {
            // console.log('destAccoms:', destAccoms);
            const responseData = destAccoms.map(destAccom => ({
                destId: destAccom.destId,
                accomId: destAccom.accomId,
                name: destAccom.accommodation.name,
                demoImage: destAccom.accommodation.demoImage.split(",")[0]
            }));

            res.json(responseData);
        }
    }).catch(err => {
        res.send('error: ' + err);
    });
});

// Transportation
dest.post('/transportation', (req, res) => {
    const destId = req.body.destId;

    DestTrans.findAll({
        where: {
            destId: destId
        },
        include: [
            {
                model: Transportation,
                attributes: ['id', 'additionInfo', 'demoImage'],
                required: true
            }
        ]
    }).then(destTrans => {
        console.log(destTrans)
        if (!destTrans || destTrans.length === 0) {
            res.json({ error: 'No transportation found for the specified destination' });
        } else {
            const responseData = destTrans.map(destTran => ({
                destId: destTran.destId,
                transId: destTran.transId, 
                name: destTran.transportation.additionInfo.includes(",") ? 
                    destTran.transportation.additionInfo.split(",")[0] : 
                    destTran.transportation.additionInfo,
                demoImage: destTran.transportation.demoImage
            }));

            res.json(responseData);
        }
    }).catch(err => {
        res.send('error: ' + err);
    });
});

// Restaurants
dest.post('/restaurant', (req, res) => {
    const destId = req.body.destId;

    DestRestaurant.findAll({
        where: {
            destId: destId
        },
        include: [
            {
                model: Restaurants,
                attributes: ['id', 'name', 'demoImage'],
                required: true
            }
        ]
    }).then(destRests => {
        if (!destRests || destRests.length === 0) {
            res.json({ error: 'No restaurants found for the specified destination' });
        } else {
            // console.log('destAccoms:', destAccoms);
            const responseData = destRests.map(destRest => ({
                destId: destRest.destId,
                restId: destRest.restId,
                name: destRest.restaurant.name,
                demoImage: destRest.restaurant.demoImage.split(",")[0]
            }));

            res.json(responseData);
        }
    }).catch(err => {
        res.send('error: ' + err);
    });
});

// Activities
dest.post('/activity', (req, res) => {
    const destId = req.body.destId;

    DestActivity.findAll({
        where: {
            destId: destId
        },
        include: [
            {
                model: Activities,
                attributes: ['id', 'name', 'demoImage'],
                required: true
            }
        ]
    }).then(destActs => {
        if (!destActs || destActs.length === 0) {
            res.json({ error: 'No accommodations found for the specified destination' });
        } else {
            // console.log('destAccoms:', destAccoms);
            const responseData = destActs.map(destActs => ({
                destId: destActs.destId,
                activityId: destActs.activityId,
                name: destActs.activity.name,
                demoImage: destActs.activity.demoImage.split(",")[0]
            }));

            res.json(responseData);
        }
    }).catch(err => {
        res.send('error: ' + err);
    });
});


module.exports = dest;



