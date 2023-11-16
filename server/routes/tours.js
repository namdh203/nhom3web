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

tours.post('/getspecificcountry', (req, res) => {
    
    const id = req.body.id
    console.log("id: " + id)
    Country.findOne({
        where: {
            id: id
        }
    }).then(country => {
        if (!country) {
            res.json({ error: 'Not enough country' })
        } else {
            const responseData = {
                id: country.id,
                countryName: country.countryName,
                description: country.description,
                additionInfo: country.additionInfo.split(", "),
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
    Tour.findAll({
        attributes: ['id', 'title', 'description', 'demoImage'],
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
                    id: tour.id,
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

tours.post('/gettourcountry_more', (req, res) => {  
    const req_country_id = req.body.id
    Tour.findAll({
        attributes: ['title', 'duration', 'price', 'priceCurrency', 'startDate', 'endDate', 'additionInfo', 'demoImage'],
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
                    duration: tour.duration,
                    price: tour.price,
                    priceCurrency: tour.priceCurrency,
                    startDate: tour.startDate,
                    endDate: tour.endDate,
                    additionInfo: tour.additionInfo.split(", "),
                    demoImage: tour.demoImage
                }));

                res.json(responseData)
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

tours.post('/getspecifictour', (req, res) => {
    
    const id = req.body.id
    console.log("id: " + id)
    Tour.findOne({
        where: {
            id: id
        }
    }).then(tour => {
        if (!tour) {
            res.json({ error: 'Not enough tour' })
        } else {
            const responseData = {
                id: tour.id,
                title: tour.title,
                description: tour.description,
                duration: tour.duration,
                price: tour.price,
                priceCurrency: tour.priceCurrency,
                startDate: tour.startDate,
                endDate: tour.endDate,
                additionInfo: tour.additionInfo.split(", "),
                demoImage: tour.demoImage
            };

            res.json(responseData)
        }
    }).catch(err => {
        res.send('error: ' + err)
    })

})

module.exports = tours