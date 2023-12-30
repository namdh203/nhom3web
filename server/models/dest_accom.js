const Sequelize = require("sequelize");
const db = require("../database/db.js");
const Destination = require("./destination.js");
const Accommodation = require("./accommodation.js");

const DestAccom = db.sequelize.define(
  "dest_accom",
  {
    destId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "destination",
        key: "id",
      },
    },
    accomId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "accommodation",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Destination.hasMany(DestAccom, { foreignKey: "destId" });
DestAccom.belongsTo(Destination, { foreignKey: "destId" });

Accommodation.hasMany(DestAccom, { foreignKey: "accomId" });
DestAccom.belongsTo(Accommodation, { foreignKey: "accomId" });

DestAccom.sync({ alter: true })
  .then((data) => {
    console.log("DestAccom synced successful!");
  })
  .catch((err) => {
    console.log("DestAccom synced failed!", err);
  });

module.exports = DestAccom;
