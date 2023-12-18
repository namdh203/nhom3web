const Sequelize = require("sequelize")
const db = require('../database/db.js')
const Restaurant = require('./restaurant.js')
const Destination = require('./destination.js')

const DestRestaurant = db.sequelize.define(
    'dest_restaurant',
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
        restId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Restaurant',
                key: 'id'
            }
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Destination.hasMany(DestRestaurant, { foreignKey: 'destId' });
DestRestaurant.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });

Restaurant.hasMany(DestRestaurant, { foreignKey: 'restId' });
DestRestaurant.belongsTo(Restaurant, { foreignKey: 'restId', targetKey: 'id' });


DestRestaurant.sync({ alter: true }).then((data) => {
    console.log("DestRestaurant synced successful!");
}).catch((err) => {
    console.log("DestRestaurant synced failed!");
})

module.exports = DestRestaurant;