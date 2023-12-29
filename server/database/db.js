const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize(
  "travelgiang",
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// check connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection database successful");
  })
  .catch((err) => {
    console.log("Connection database failed!");
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
