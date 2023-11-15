const express = require("express")
const tours = express.Router();
const cors = require("cors")
const Sequelize = require("sequelize")
const seedrandom = require("seedrandom")

const Tour = require("../models/tour");
const Country = require("../models/country");
const Destination = require("../models/destination");
const TourDest = require("../models/tour_dest");

const sequelize = new Sequelize('travelam', 'root', '@Ttg123456', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

tours.use(cors())

tours.post('/getbesttour', (req, res) => {
    const numberOfTours = req.body.number;

    Tour.findAll({
        attributes: ['title', 'description', 'demoImage'],
        order: [
            ['voting', 'DESC']
        ],
        limit: Math.min(numberOfTours, 5)
    }).then(tours => {
        if (!tours) {
            res.json({ error: 'Not enough tours' })
        } else {
            const responseData = tours.map(tour => ({
                title: tour.title,
                description: tour.description,
                demoImage: tour.demoImage,
            }));

            res.json(responseData)
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
})

tours.post('/getrandomcountry', (req, res) => {
    
    const randomId = Math.floor(Math.random() * 5) + 1;
    Country.findOne({
        where: {
            id: randomId
        }
    }).then(country => {
        if (!country) {
            res.json({ error: 'Not enough country' })
        } else {
            const responseData = {
                id: country.id,
                countryName: country.countryName,
                description: country.description,
                demoImage: country.demoImage
            };

            res.json(responseData)
        }
    }).catch(err => {
        res.send('error: ' + err)
    })

})

tours.post('/gettourcountry', (req, res) => {
    const req_country_id = req.body.id
    // console.log("req_country_id: ", req_country_id)
    Tour.findAll({
        attributes: ['title', 'description', 'demoImage'],
        include: [
            {
                model: TourDest,
                attributes: [],
                required: true,
                include: [
                    {
                        model: Destination,
                        attributes: [],
                        where: {
                            country_id: req_country_id // Thay thế 1 bằng giá trị country_id mong muốn
                        },
                    },
                ],
            },
        ],
    })
        .then(tours => {
            if (!tours) {
                res.json({ error: 'Not enough tours' })
            } else {
                const responseData = tours.map(tour => ({
                    title: tour.title,
                    description: tour.description,
                    demoImage: tour.demoImage,
                }));

                res.json(responseData)
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


tours.post('/getrandomcountry2', (req, res) => {
    
    var randomId = Math.floor(Math.random() * 5) + 1
    Country.findOne({
        where: {
            id: randomId
        }
    }).then(country => {
        if (!country) {
            res.json({ error: 'Not enough country' })
        } else {
            const responseData = {
                id: country.id,
                countryName: country.countryName,
                description: country.description,
                demoImage: country.demoImage
            };

            res.json(responseData)
        }
    }).catch(err => {
        res.send('error: ' + err)
    })

})

tours.post('/gettourcountry2', (req, res) => {
    const req_country_id = req.body.id
    console.log("req_country_id: ", req_country_id)
    Tour.findAll({
        attributes: ['title', 'description', 'demoImage'],
        include: [
            {
                model: TourDest,
                attributes: [],
                required: true,
                include: [
                    {
                        model: Destination,
                        attributes: [],
                        where: {
                            country_id: req_country_id // Thay thế 1 bằng giá trị country_id mong muốn
                        },
                    },
                ],
            },
        ],
    })
        .then(tours => {
            if (!tours) {
                res.json({ error: 'Not enough tours' })
            } else {
                const responseData = tours.map(tour => ({
                    title: tour.title,
                    description: tour.description,
                    demoImage: tour.demoImage,
                }));

                res.json(responseData)
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = tours