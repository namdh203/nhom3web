const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Tour = require('./tour.js')
const Destination = require('./destination.js')

const TourDest = db.sequelize.define(
    'tour_dest',
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
        dest_id: {
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

Tour.hasMany(TourDest, { foreignKey: 'tour_id' });
TourDest.belongsTo(Tour, { foreignKey: 'tour_id', targetKey: 'id' });

Destination.hasMany(TourDest, { foreignKey: 'dest_id' });
TourDest.belongsTo(Destination, { foreignKey: 'dest_id', targetKey: 'id' });

TourDest.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = TourDest;