const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Destination = require('../models/destination.js')

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


Destination.hasMany(Accommodation, { foreignKey: 'destId' });
Accommodation.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });

Accommodation.sync({ alter: true }).then((data) => {
    console.log("Accommodation synced successful!");
}).catch((err) => {
    console.log("Accommodation synced failed!");
})

module.exports = Accommodation;