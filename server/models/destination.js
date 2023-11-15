const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Destination = db.sequelize.define(
  'destination',
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
    country_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
          model: 'Country',
          key: 'id'
      }
    },
    description: {
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

Destination.sync({alter : true}).then((data) => {
  console.log("Table and model synced successful!");
}).catch((err) => {
  console.log("Table and model synced failed!");
})

module.exports = Destination;