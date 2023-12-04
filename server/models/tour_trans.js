const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Tour = require('../models/tour.js')
const Transportation = require('../models/transportation.js')

const TourTrans = db.sequelize.define(
    'tour_trans',
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
        transId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Transportation',
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Tour.hasMany(TourTrans, { foreignKey: 'tourId' });
TourTrans.belongsTo(Tour, { foreignKey: 'tourId', targetKey: 'id' });

Transportation.hasMany(TourTrans, { foreignKey: 'transId' });
TourTrans.belongsTo(Transportation, { foreignKey: 'transId', targetKey: 'id' });

TourTrans.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = TourTrans;