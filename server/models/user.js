const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Customer = require('../models/customer.js')

const User = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)


User.hasOne(Customer, { foreignKey: 'user_id' });
Customer.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

User.sync({alter : true}).then((data) => {
  console.log("User synced successful!");
}).catch((err) => {
  console.log("User synced failed!");
})

module.exports = User;