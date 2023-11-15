const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Transportation = db.sequelize.define(
    'transportation',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDest_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Destination',
                key: 'id'
            }
        },
        endDest_id: {
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

Transportation.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = Transportation;