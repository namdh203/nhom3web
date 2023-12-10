const Sequelize = require('sequelize')
const db = require('../database/db')

const Destination = require('../models/destination')

const Country = db.sequelize.define(
    'country',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        countryName: {
            type: Sequelize.STRING,
            allowNull: false
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
            allowNull: false
        }
    },
    {
      timestamps: false,
      freezeTableName: true
    }

)

Country.hasMany(Destination, { foreignKey: 'countryId' });
Destination.belongsTo(Country, { foreignKey: 'countryId', targetKey: 'id' });

Country.sync({alter: true}).then((data) => {
    console.log("Country synced successful!")
}).catch((err) => {
    console.log("Country synced failed!")
})

module.exports = Country;