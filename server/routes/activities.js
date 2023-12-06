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

module.exports = activities;

