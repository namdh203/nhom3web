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
    }).catch(e => {
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
                    demoImage: activity.demoImage,
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

activities.post('/admin/addActivity', async (req, res) => {
    const new_activity = req.body.new_activity;

    try {
        const createdActivity = await Activity.create({
            name: new_activity.name,
            destId: new_activity.destId,
            type: new_activity.type,
            description: new_activity.description,
            additionInfo: new_activity.additionInfo,
            demoImage: new_activity.demoImage,
        });

        res.json({
            msg: 'Activity added successfully',
            activity: {
                id: createdActivity.id,
                name: createdActivity.name,
                destId: createdActivity.destId,
                type: createdActivity.type,
                description: createdActivity.description,
                additionInfo: createdActivity.additionInfo,
                demoImage: createdActivity.demoImage,
            }
        });
    } catch (error) {
        console.error('Error adding Activity:', error);
        res.status(400).json({ error: 'Error adding Activity' });
    }
});

activities.post('/admin/deleteActivity', async (req, res) => {
    const old_activity = req.body.old_activity;

    try {
        const activityToDelete = await Activity.findByPk(old_activity.id);

        if (!activityToDelete) {
            return res.status(404).json({ error: 'Activity not found' });
        }

        await activityToDelete.destroy();

        res.json({ msg: 'Activity deleted successfully' });
    } catch (error) {
        console.error('Error deleting Activity:', error);
        res.status(400).json({ error: 'Error deleting Activity' });
    }
});


module.exports = activities;
