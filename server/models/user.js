const Sequelize = require("sequelize")
const db = require('../database/db.js')

const User = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
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

User.sync({alter : true}).then((data) => {
  console.log("Table and model synced successful!");
}).catch((err) => {
  console.log("Table and model synced failed!");
})

module.exports = User;