const express = require('express');
const restaurants = express.Router();
const cors = require("cors");
const Sequelize = require("sequelize");

const Restaurant = require("../models/restaurant");

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

restaurants.use(cors());

restaurants.post('/randomRestaurant', (req, res) => {
    const restId = req.body.restId;
    Restaurant.findOne({
        where: {
            id: restId
        }
    }).then(randRest => {
        if (!randRest) {
            console.log("No such restaurant id found!");
        } else {
            const responseData = {
                id: randRest.id,
                name: randRest.name,
                destId: randRest.destId,
                address: randRest.address,
                telephone: randRest.telephone,
                description: randRest.description,
                additionInfo: randRest.additionInfo,
                demoImage: randRest.demoImage,
            };
            res.json(responseData)
        }
    }).catch (e => {
        res.send("error: " + e);
    })
})

// admin
restaurants.post('/admin/getAllRestaurant', (req, res) => {
    Restaurant.findAll({
        limit: 50
    })
    .then(restaurants => {
        if (restaurants) {
            const responseData = restaurants.map(restaurant => ({
                id: restaurant.id,
                name: restaurant.name,
                destId: restaurant.destId,
                address: restaurant.address,
                telephone: restaurant.telephone,
                description: restaurant.description,
                additionInfo: restaurant.additionInfo,
            }));
            res.json(responseData);
        } else {
            res.status(400).json({ error: 'No restaurant found' });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
  });

module.exports = restaurants;
