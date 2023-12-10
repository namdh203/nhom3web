const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Destination = require('../models/destination.js')

const Transportation = db.sequelize.define(
    'transportation',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDestId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Destination',
                key: 'id'
            }
        },
        endDestId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Destination',
                key: 'id'
            }
        },
        startTime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endTime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        priceCurrency: {
            type: Sequelize.STRING,
            defaultValue: "USD"
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        additionInfo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        demoImage: {
            type: Sequelize.STRING,
            defaultValue: ""
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Destination.hasMany(Transportation, { foreignKey: 'startDestId' });
Transportation.belongsTo(Destination, { foreignKey: 'startDestId', targetKey: 'id' });

Destination.hasMany(Transportation, { foreignKey: 'endDestId' });
Transportation.belongsTo(Destination, { foreignKey: 'endDestId', targetKey: 'id' });

Transportation.sync({ 
    alter: true,
    logging: console.log
 }).then((data) => {
    console.log("Transportation synced successful!");
}).catch((err) => {
    console.log("Transportation synced failed!");
})

module.exports = Transportation;