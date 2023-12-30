const Sequelize = require("sequelize");
const db = require("../database/db.js");
const Destination = require("./destination.js");
const Activity = require("./activity.js");

const DestActivity = db.sequelize.define(
  "dest_activity",
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
    activityId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "activity",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Destination.hasMany(DestActivity, { foreignKey: "destId" });
DestActivity.belongsTo(Destination, { foreignKey: "destId" });

Activity.hasMany(DestActivity, { foreignKey: "activityId" });
DestActivity.belongsTo(Activity, { foreignKey: "activityId" });

DestActivity.sync({ alter: true })
  .then((data) => {
    console.log("DestActivity synced successful!");
  })
  .catch((err) => {
    console.log("DestActivity synced failed!", err);
  });

module.exports = DestActivity;
