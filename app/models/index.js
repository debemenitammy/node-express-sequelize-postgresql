const { Sequelize } = require("sequelize");

// Use the full database connection URL provided by Northflank
const sequelize = new Sequelize(process.env.NF_NODE_CRUD_DEMO_DB_POSTGRES_URI, {
  dialect: "postgres",
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;