const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Customer = db.sequelize.define(
    'customer',
    {
        userId: {
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
        },
        avatar: {
            type: Sequelize.TEXT
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

// Customer.hasMany(Comment, { foreignKey: 'email' });
// Comment.belongsTo(Customer, { foreignKey: 'email', targetKey: 'email' });

Customer.sync({ alter: true }).then((data) => {
    console.log("Customer synced successful!");
}).catch((err) => {
    console.log("Customer synced failed!");
})

module.exports = Customer;