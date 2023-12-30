const express = require("express")
const tours = express.Router();
const cors = require("cors")
// const Sequelize = require("sequelize")
const seedrandom = require("seedrandom")
const { Op, Sequelize } = require('sequelize');

const Tour = require("../models/tour");
const Country = require("../models/country");
const Destination = require("../models/destination");
const TourDest = require("../models/tour_dest");
const Comment = require("../models/comment");

const Activity = require('../models/activity.js')
const Transportation = require('../models/transportation.js')
const Restaurant = require('../models/restaurant.js')
const Accommodation = require('../models/accommodation.js')
const Payment = require('../models/payment.js')
const Customer = require('../models/customer.js')

const moment = require('moment');

tours.use(cors())

tours.post('/getbesttour', (req, res) => {
    const numberOfTours = req.body.number;
    const tourType = req.body.type

    Tour.findAll({
        attributes: ['title', 'description', 'demoImage'],
        where: {
            type: tourType
        },
        order: [
            ['voting', 'DESC']
        ],
        limit: Math.min(numberOfTours, 10)
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

    const randomId = Math.floor(Math.random() * 9) + 1;
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
    const req_countryId = req.body.id
    const type = req.body.type

    Tour.findAll({
        attributes: ['id', 'title', 'description', 'demoImage'],
        // where: {
        //     id: req_countryId
        // }
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
                            countryId: req_countryId // Thay thế 1 bằng giá trị countryId mong muốn
                        },
                    },
                ],
            },
        ],
        where: {
            type: type
        }
    })
        .then(tours => {
            console.log("Tour data: " + tours);
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
    const tourType = req.body.type
    Tour.findAll({
        attributes: ['id', 'title', 'duration', 'price', 'priceCurrency', 'startDate', 'endDate', 'additionInfo', 'demoImage'],
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
                            countryId: req_country_id // Thay thế 1 bằng giá trị countryId mong muốn
                        },
                    },
                ],
            },
        ],
        where: {
            type: tourType
        }
    })
        .then(tours => {
            if (!tours) {
                res.json({ error: 'Not enough tours' })
            } else {
                const responseData = tours.map(tour => ({
                    id: tour.id,
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

tours.post('/getdestdata', (req, res) => {
    const req_tour_id = req.body.id
    // console.log(req_tour_id)
    Destination.findAll({
        attributes: ['id', 'name', 'description', 'additionInfo', 'demoImage'],
        include: [
            {
                model: TourDest,
                attributes: [],
                required: true,
                where: {
                    tour_id: req_tour_id
                },
                include: [
                    {
                        model: Tour,
                        attributes: [],
                        required: true
                    },
                ],
            },
        ],
    })
        .then(tours => {
            if (!tours) {
                res.json({ error: 'Not enough destinations' })
            } else {
                const responseData = tours.map(tour => ({
                    id: tour.id,
                    name: tour.name,
                    description: tour.description,
                    additionInfo: tour.additionInfo.split(", "),
                    demoImage: tour.demoImage,
                }));

                res.json(responseData)
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

tours.post('/getcustomdest', (req, res) => {
    const itiList = req.body.itiList
    // console.log(req_tour_id)
    Destination.findAll({
        attributes: ['id', 'name', 'description', 'additionInfo', 'demoImage'],
        where: {
            id: {
              [Sequelize.Op.in]: itiList
            }
          }
    })
        .then(dests => {
            if (!dests) {
                res.json({ error: 'Not enough destinations' })
            } else {
                const responseData = dests.map(dest => ({
                    id: dest.id,
                    name: dest.name,
                    description: dest.description,
                    additionInfo: dest.additionInfo.split(", "),
                    demoImage: dest.demoImage,
                }));

                res.json(responseData)
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

tours.post('/getaccomlists', (req, res) => {
    const length = req.body.length;
    const query = req.body.query
    // console.log("Length: ", length)
    Accommodation.findAll({
        attributes: ['id', 'name', 'pricePerNight', 'priceCurrency', 'address', 'telephone', 'contactEmail', 'additionInfo', 'demoImage'],
        where: {
            name: {
                [Op.like]: `%${query}%`
            }
        },
        limit: length
    }).then(accoms => {

        if (!accoms) {
            console.log("No such accom found!");
        } else {
            const responseData = accoms.map(accom => ({
                id: accom.id,
                name: accom.name,
                pricePerNight: accom.pricePerNight,
                priceCurrency: accom.priceCurrency,
                address: accom.address,
                telephone: accom.telephone,
                contactEmail: accom.contactEmail,
                additionInfo: accom.additionInfo.split(", "),
                demoImage: accom.demoImage.split(", ")[0],
            }));

            res.json(responseData)
        }
    }).catch(e => {
        res.send("error: " + e);
    })
})


tours.post('/getrestlists', (req, res) => {
    const length = req.body.length;
    const query = req.body.query
    // console.log("Length: ", length)
    Restaurant.findAll({
        attributes: ['id', 'name', 'address', 'telephone', 'additionInfo', 'demoImage'],
        where: {
            name: {
                [Op.like]: `%${query}%`
            }
        },
        limit: length
    }).then(rests => {

        if (!rests) {
            console.log("No such rest found!");
        } else {
            const responseData = rests.map(rest => ({
                id: rest.id,
                name: rest.name,
                address: rest.address,
                telephone: rest.telephone,
                additionInfo: rest.additionInfo.split(", "),
                demoImage: rest.demoImage.split(",\n")[0],
            }));

            res.json(responseData)
        }
    }).catch(e => {
        res.send("error: " + e);
    })
})

tours.post('/getactlists', (req, res) => {
    const length = req.body.length;
    const query = req.body.query
    // console.log("Length: ", length)
    Activity.findAll({
        attributes: ['id', 'name', 'type', 'additionInfo', 'demoImage'],
        where: {
            name: {
                [Op.like]: `%${query}%`
            }
        },
        limit: length
    }).then(acts => {

        if (!acts) {
            console.log("No such rest found!");
        } else {
            const responseData = acts.map(act => ({
                id: act.id,
                name: act.name,
                type: act.type,
                additionInfo: act.additionInfo.split(", "),
                demoImage: act.demoImage.split(",\n")[0],
            }));

            res.json(responseData)
        }
    }).catch(e => {
        res.send("error: " + e);
    })
})


tours.post('/gettranslists', (req, res) => {
    const length = req.body.length;
    const query = req.body.query
    // console.log("Length: ", length)
    Transportation.findAll({
        attributes: ['id', 'type', 'additionInfo', 'demoImage'],
        where: {
            type: {
                [Op.like]: `%${query}%`
            }
        },
        limit: length
    }).then(acts => {

        if (!acts) {
            console.log("No such trans found!");
        } else {
            const responseData = acts.map(act => ({
                id: act.id,
                type: act.type,
                additionInfo: act.additionInfo.split(", "),
                demoImage: act.demoImage,
            }));

            res.json(responseData)
        }
    }).catch(e => {
        res.send("error: " + e);
    })
})

// admin
tours.post('/admin/getAllTour', (req, res) => {
    Tour.findAll({
        limit: 300,
        include: [{
            model: TourDest,
            attributes: ['dest_id'],
            as: 'tour_dests',
        }]
    })
        .then(tours => {
            if (tours) {
                const responseData = tours.map(tour => ({
                    id: tour.id,
                    destIds: tour.tour_dests.map(tour_dest => tour_dest.dest_id),
                    title: tour.title,
                    description: tour.description,
                    duration: tour.duration,
                    price: tour.price,
                    priceCurrency: tour.priceCurrency,
                    additionInfo: tour.additionInfo,
                    voting: tour.voting,
                    type: tour.type,
                    startDate: tour.startDate,
                    endDate: tour.endDate,
                    demoImage: tour.demoImage,
                }));
                res.json(responseData);
            } else {
                res.status(400).json({ error: 'No tours found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

tours.post('/admin/addTour', async (req, res) => {
    const new_tour = req.body.new_tour;

    const new_startDate = moment().format('YYYY-MM-DD');
    const new_endDate = moment().add(new_tour.duration - 1, 'days').format('YYYY-MM-DD');

    try {
        const createdTour = await Tour.create({
            title: new_tour.title,
            description: new_tour.description,
            duration: new_tour.duration,
            price: new_tour.price,
            priceCurrency: new_tour.priceCurrency,
            additionInfo: new_tour.additionInfo,
            voting: new_tour.voting,
            type: new_tour.type,
            startDate: new_startDate,
            endDate: new_endDate,
            demoImage: new_tour.demoImage,
        });

        for (const destId of new_tour.destId) {
            await TourDest.create({
                tour_id: createdTour.id,
                dest_id: destId
            });
        }

        res.json({
            msg: 'Tour added successfully',
            tour: {
                id: createdTour.id,
                title: createdTour.title,
                description: createdTour.description,
                duration: createdTour.duration,
                price: createdTour.price,
                priceCurrency: createdTour.priceCurrency,
                startDate: createdTour.startDate,
                endDate: createdTour.endDate,
                additionInfo: createdTour.additionInfo,
                voting: createdTour.voting,
                type: createdTour.type,
                demoImage: createdTour.demoImage,
            }
        });
    } catch (error) {
        console.error('Error adding tour:', error);
        res.status(400).json({ error: 'Error adding tour' });
    }
});

tours.post('/admin/deleteTour', async (req, res) => {
    const old_tour = req.body.old_tour;

    try {
        const tourToDelete = await Tour.findByPk(old_tour.id);

        if (!tourToDelete) {
            return res.status(404).json({ error: 'Tour not found'});
        }

        await TourDest.destroy({
            where: {
                tour_id: tourToDelete.id
            }
        })

        await tourToDelete.destroy();

        res.json({ msg: 'Tour deleted successfully' });
    } catch (error) {
        console.error('Error deleting tour:', error);
        res.status(400).json({ error: 'Error deleting tour' });
    }
});


module.exports = tours