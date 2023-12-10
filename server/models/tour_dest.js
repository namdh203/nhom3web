const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Tour = require('./tour.js')
const Destination = require('./destination.js')

const TourDest = db.sequelize.define(
    'tour_dest',
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
        dest_d: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Destination',
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Tour.hasMany(TourDest, { foreignKey: 'tourId' });
TourDest.belongsTo(Tour, { foreignKey: 'tourId', targetKey: 'id' });

Destination.hasMany(TourDest, { foreignKey: 'destId' });
TourDest.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });

TourDest.sync({ alter: true }).then((data) => {
    console.log("TourDest synced successful!");
}).catch((err) => {
    console.log("TourDest synced failed!");
})

module.exports = TourDest;