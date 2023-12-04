const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Payment = db.sequelize.define(
    'payment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Customer',
                key: 'id'
            }
        },
        tourId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Tour',
                key: 'id'
            }
        },
        payDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        amount: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        currency: {
            type: Sequelize.STRING,
            defaultValue: "USD"
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Payment.sync({ alter: true }).then((data) => {
    console.log("Table and model synced successful!");
}).catch((err) => {
    console.log("Table and model synced failed!");
})

module.exports = Payment;