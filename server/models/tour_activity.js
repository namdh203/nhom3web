const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Tour = require('../models/tour.js')
const Activity = require('../models/activity.js')

const TourActivity = db.sequelize.define(
    'tour_activity',
    {
        tourId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Tour',
                key: 'id'
            }
        },
        activityId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Activity',
                key: 'id'
            }
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Tour.hasMany(TourActivity, { foreignKey: 'tourId' });
TourActivity.belongsTo(Tour, { foreignKey: 'tourId', targetKey: 'id' });

Activity.hasMany(TourActivity, { foreignKey: 'activityId' });
TourActivity.belongsTo(Activity, { foreignKey: 'activityId', targetKey: 'id' });

TourActivity.sync({ alter: true }).then((data) => {
    console.log("TourActivity synced successful!");
}).catch((err) => {
    console.log("TourActivity synced failed!");
})

module.exports = TourActivity;