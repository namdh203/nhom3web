const Sequelize = require("sequelize");
const db = require("../database/db");

const Country = require("./country");

const CountryMonthlyAdvice = db.sequelize.define(
  "country_monthly_advice",
  {
    countryId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    month: {
      type: Sequelize.TINYINT,
      primaryKey: true,
      allowNull: false,
    },
    adviceCode: {
      type: Sequelize.TINYINT,
      primaryKey: true,
      allowNull: false,
    },
    lowTemp: {
      type: Sequelize.TINYINT,
      primaryKey: true,
      allowNull: false,
    },
    highTemp: {
      type: Sequelize.TINYINT,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Country.hasMany(CountryMonthlyAdvice, {
  foreignKey: {
    name: "countryId",
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
CountryMonthlyAdvice.belongsTo(Country);

CountryMonthlyAdvice.sync({ alter: true })
  .then((_) => {
    console.log("CountryMonthlyAdvice synced successfully!");
  })
  .catch((err) => {
    console.log("CountryMonthlyAdvice has failed to sync");
    console.error(err);
  });

module.exports = CountryMonthlyAdvice;
