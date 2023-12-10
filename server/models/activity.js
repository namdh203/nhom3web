const Sequelize = require("sequelize")
const db = require('../database/db.js')

const Destination = require('../models/destination.js')

const Activity = db.sequelize.define(
  'activity',
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
    destId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Destination',
        key: 'id'
      }
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
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

Destination.hasMany(Activity, { foreignKey: 'destId' });
Activity.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });


Destination.hasMany(Activity, { foreignKey: 'destId' });
Activity.belongsTo(Destination, { foreignKey: 'destId', targetKey: 'id' });


Activity.sync({ alter: true }).then((data) => {
  console.log("Activity synced successful!");
}).catch((err) => {
  console.log("Activity synced failed!");
})

module.exports = Activity;