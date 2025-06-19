import { Sequelize, DataTypes } from "sequelize";
import { DB, USER, PASSWORD, HOST, dialect as _dialect } from "../config/db.config";

const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: _dialect,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, DataTypes);
db.doubt = require("./doubt.model")(sequelize, DataTypes);

db.user.hasMany(db.doubt);
db.doubt.belongsTo(db.user);

export default db;
