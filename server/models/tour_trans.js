const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Tour = require('../models/tour.js')
const Transportation = require('../models/transportation.js')

const TourTrans = db.sequelize.define(
    'tour_trans',
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
        trans_id: {
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

Tour.hasMany(TourTrans, { foreignKey: 'tour_id' });
TourTrans.belongsTo(Tour, { foreignKey: 'tour_id', targetKey: 'id' });

Transportation.hasMany(TourTrans, { foreignKey: 'trans_id' });
TourTrans.belongsTo(Transportation, { foreignKey: 'trans_id', targetKey: 'id' });

TourTrans.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = TourTrans;