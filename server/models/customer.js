const Sequelize = require("sequelize")
const db = require('../database/db.js')

const User = require('../models/user.js')

const Customer = db.sequelize.define(
    'customer',
    {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            reference: {
                model: 'User',
                key: 'id'
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cardNo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        passport: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Customer.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = Customer;