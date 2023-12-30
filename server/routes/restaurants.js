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
    }).catch(e => {
        res.send("error: " + e);
    })
})

// admin
restaurants.post('/admin/getAllRestaurant', (req, res) => {
    Restaurant.findAll({
        limit: 300
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
                    demoImage: restaurant.demoImage,
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

restaurants.post('/admin/addRestaurant', async (req, res) => {
    const new_restaurant = req.body.new_restaurant;

    try {
        const createdRestaurant = await Restaurant.create({
            name: new_restaurant.name,
            destId: new_restaurant.destId,
            address: new_restaurant.address,
            telephone: new_restaurant.telephone,
            description: new_restaurant.description,
            additionInfo: new_restaurant.additionInfo,
            demoImage: new_restaurant.demoImage,
        });

        res.json({
            msg: 'Restaurant added successfully',
            restaurant: {
                id: createdRestaurant.id,
                name: createdRestaurant.name,
                destId: createdRestaurant.destId,
                address: createdRestaurant.address,
                telephone: createdRestaurant.telephone,
                description: createdRestaurant.description,
                additionInfo: createdRestaurant.additionInfo,
                demoImage: createdRestaurant.demoImage,
            }
        });
    } catch (error) {
        console.error('Error adding Restaurant:', error);
        res.status(400).json({ error: 'Error adding Restaurant' });
    }
});

restaurants.post('/admin/deleteRestaurant', async (req, res) => {
    const old_restaurant = req.body.old_restaurant;

    try {
        const restaurantToDelete = await Restaurant.findByPk(old_restaurant.id);

        if (!restaurantToDelete) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        await restaurantToDelete.destroy();

        res.json({ msg: 'Restaurant deleted successfully' });
    } catch (error) {
        console.error('Error deleting Restaurant:', error);
        res.status(400).json({ error: 'Error deleting Restaurant' });
    }
});


module.exports = restaurants;
