const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Tour = require('../models/tour.js')
const Accommodation = require('../models/accommodation.js')

const TourAccom = db.sequelize.define(
    'tour_accom',
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
        accom_id: {
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

Tour.hasMany(TourAccom, { foreignKey: 'tour_id' });
TourAccom.belongsTo(Tour, { foreignKey: 'tour_id', targetKey: 'id' });

Accommodation.hasMany(TourAccom, { foreignKey: 'accom_id' });
TourAccom.belongsTo(Accommodation, { foreignKey: 'accom_id', targetKey: 'id' });


TourAccom.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = TourAccom;