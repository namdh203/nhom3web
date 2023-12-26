const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Destination = require('./destination.js')
const Transportation = require('./transportation.js')

const DestTrans = db.sequelize.define(
    'dest_trans',
    {
        destId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Destination',
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

Destination.hasMany(DestTrans, { foreignKey: 'destId' });
DestTrans.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });

Transportation.hasMany(DestTrans, { foreignKey: 'transId' });
DestTrans.belongsTo(Transportation, { foreignKey: 'transId', targetKey: 'id' });

DestTrans.sync({ alter: true }).then((data) => {
    console.log("DestTrans synced successful!");
}).catch((err) => {
    console.log("DestTrans synced failed!");
})

module.exports = DestTrans;