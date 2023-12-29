const express = require('express');
const activities = express.Router();
const cors = require("cors");
const Sequelize = require("sequelize");

const Activity = require("../models/activity");

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

activities.use(cors());

activities.post('/randomAct', (req, res) => {
    const activityId = req.body.activityId;
    Activity.findOne({
        where: {
            id: activityId
        }
    }).then(randActivity => {
        if (!randActivity) {
            console.log("No such activity id found!");
        } else {
            const responseData = {
                id: randActivity.id,
                name: randActivity.name,
                destId: randActivity.destId,
                type: randActivity.type,
                description: randActivity.description,
                additionInfo: randActivity.additionInfo,
                demoImage: randActivity.demoImage,
            };
            res.json(responseData)
        }
    }).catch (e => {
        res.send("error: " + e);
    })
})

// admin
activities.post('/admin/getAllActivity', (req, res) => {
    Activity.findAll({
        limit: 50
    })
    .then(activities => {
        if (activities) {
            const responseData = activities.map(activity => ({
                id: activity.id,
                name: activity.name,
                destId: activity.destId,
                type: activity.type,
                description: activity.description,
                additionInfo: activity.additionInfo,
            }));
            res.json(responseData);
        } else {
            res.status(400).json({ error: 'No activity found' });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
  });

module.exports = activities;
