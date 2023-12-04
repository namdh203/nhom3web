const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Accommodation = db.sequelize.define(
    'accommodation',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        destId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Destination',
                key: 'id'
            }
        },
        pricePerNight: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        priceCurrency: {
            type: Sequelize.STRING,
            defaultValue: "USD"
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contactEmail: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            defaultValue: ""
        },
        additionInfo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        demoImage: {
            type: Sequelize.TEXT,
            defaultValue: ""
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Accommodation.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = Accommodation;