const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Restaurant = require('../models/restaurant.js')
const Tour = require('../models/tour.js')

const TourMeal = db.sequelize.define(
    'tour_meal',
    {
        tour_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Tour',
                key: 'id'
            }
        },
        rest_id: {
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

Tour.hasMany(TourMeal, { foreignKey: 'tour_id' });
TourMeal.belongsTo(Tour, { foreignKey: 'tour_id', targetKey: 'id' });

Restaurant.hasMany(TourMeal, { foreignKey: 'rest_id' });
TourMeal.belongsTo(Restaurant, { foreignKey: 'rest_id', targetKey: 'id' });


TourMeal.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = TourMeal;