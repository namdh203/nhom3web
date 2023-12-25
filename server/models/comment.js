const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Customer = require('./customer.js')

const Comment = db.sequelize.define(
    'comment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            reference: {
                model: Customer,
                key: 'userId'
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        avatar: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        createAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            primaryKey: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)


Customer.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(Customer, { foreignKey: 'userId', targetKey: 'userId' });

Comment.sync({ alter: true }).then((data) => {
    console.log("Comment synced successful!");
}).catch((err) => {
    console.log("Comment synced failed!");
})

module.exports = Comment;