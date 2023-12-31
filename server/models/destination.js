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
    countryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
          model: 'Country',
          key: 'id'
      }
    },
    description: {
      type: Sequelize.TEXT,
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
  console.log("Destination synced successful!");
}).catch((err) => {
  console.log("Destination synced failed!");
})

module.exports = Destination;