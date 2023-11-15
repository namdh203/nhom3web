const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Restaurant = db.sequelize.define(
  'restaurant',
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
    dest_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Destination',
        key: 'id'
      }
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telephone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    additionInfo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    demoImage: {
      type: Sequelize.STRING,
      defaultValue: ""
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

Restaurant.sync({alter : true}).then((data) => {
  console.log("Table and model synced successful!");
}).catch((err) => {
  console.log("Table and model synced failed!");
})

module.exports = Restaurant;