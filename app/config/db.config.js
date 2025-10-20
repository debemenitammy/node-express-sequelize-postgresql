const { Sequelize } = require('sequelize');

// Use the environment variable injected by Northflank
const sequelize = new Sequelize(process.env.NF_NODE_CRUD_DEMO_DB_POSTGRES_URI, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;