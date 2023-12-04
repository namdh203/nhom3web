const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Tour = require('../models/tour.js')
const Accommodation = require('../models/accommodation.js')

const TourAccom = db.sequelize.define(
    'tour_accom',
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
        accomId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Accommodation',
                key: 'id'
            }
        },
        roomNum: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Tour.hasMany(TourAccom, { foreignKey: 'tourId' });
TourAccom.belongsTo(Tour, { foreignKey: 'tourId', targetKey: 'id' });

Accommodation.hasMany(TourAccom, { foreignKey: 'accomId' });
TourAccom.belongsTo(Accommodation, { foreignKey: 'accomId', targetKey: 'id' });


TourAccom.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = TourAccom;