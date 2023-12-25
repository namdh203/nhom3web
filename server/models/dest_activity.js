const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Destination = require('./destination.js')
const Activity = require('./activity.js')

const DestActivity = db.sequelize.define(
    'dest_activity',
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
        activityId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Activity',
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Destination.hasMany(DestActivity, { foreignKey: 'destId' });
DestActivity.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });

Activity.hasMany(DestActivity, { foreignKey: 'activityId' });
DestActivity.belongsTo(Activity, { foreignKey: 'activityId', targetKey: 'id' });

DestActivity.sync({ alter: true }).then((data) => {
    console.log("DestActivity synced successful!");
}).catch((err) => {
    console.log("DestActivity synced failed!");
})

module.exports = DestActivity;