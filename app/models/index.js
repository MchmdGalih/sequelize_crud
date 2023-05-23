const Sequelize = require("sequelize");
const sequelizeConnection = new Sequelize("biodata", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelizeConnection = sequelizeConnection;

db.biodata = require("./biodata.model")(sequelizeConnection, Sequelize);

module.exports = db;
