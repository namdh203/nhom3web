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
            type: Sequelize.STRING,
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

Country.hasMany(Destination, { foreignKey: 'country_id' });
Destination.belongsTo(Country, { foreignKey: 'country_id', targetKey: 'id' });

Country.sync({alter: true}).then((data) => {
    console.log("Table synced successful!")
}).catch((err) => {
    console.log("Table synced failed!")
})

module.exports = Country;