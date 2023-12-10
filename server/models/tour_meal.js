const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Restaurant = require('../models/restaurant.js')
const Tour = require('../models/tour.js')

const TourMeal = db.sequelize.define(
    'tour_meal',
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
        restId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Restaurant',
                key: 'id'
            }
        },
        timeSuggest: {
            type: Sequelize.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Tour.hasMany(TourMeal, { foreignKey: 'tourId' });
TourMeal.belongsTo(Tour, { foreignKey: 'tourId', targetKey: 'id' });

Restaurant.hasMany(TourMeal, { foreignKey: 'restId' });
TourMeal.belongsTo(Restaurant, { foreignKey: 'restId', targetKey: 'id' });


TourMeal.sync({ alter: true }).then((data) => {
    console.log("TourMeal synced successful!");
}).catch((err) => {
    console.log("TourMeal synced failed!");
})

module.exports = TourMeal;