const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Tour = db.sequelize.define(
    'tour',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        duration: {
            type: Sequelize.INTEGER,
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
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        additionInfo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        demoImage: {
            type: Sequelize.STRING,
            allowNull: false
        },
        voting: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Tour.sync({ alter: true }).then((data) => {
    console.log("Tour synced successful!");
}).catch((err) => {
    console.log("Tour synced failed!");
})

module.exports = Tour;