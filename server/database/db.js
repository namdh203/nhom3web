const Sequelize = require('sequelize')
const db = {}


// Database: Travelam (testingdbuser for test)
const sequelize = new Sequelize('travelam', 'root', 'empty2003', {
  host: 'localhost',
  dialect: 'mysql',

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
