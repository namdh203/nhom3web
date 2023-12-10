const Sequelize = require("sequelize")
const db = require('../database/db.js')

const User = require("../models/user.js")

const Payment = db.sequelize.define(
    'payment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            reference: {
                model: 'Customer',
                key: 'userId'
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

User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

Payment.sync({ alter: true }).then((data) => {
    console.log("Payment synced successful!");
}).catch((err) => {
    console.log("Payment synced failed!");
})

module.exports = Payment;