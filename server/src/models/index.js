const fs            = require('fs');
const path          = require('path');
const { Sequelize } = require('sequelize');
const config        = require('../config/config');

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

const db = { Sequelize, sequelize };

fs
.readdirSync(__dirname)
.filter(file => file !== 'index.js' )
.forEach(file => {

  const modelPath = path.join(__dirname, file);
  const modelName = file.split('.js')[0];
  const model     = require(modelPath)(sequelize, Sequelize.DataTypes);
  db[modelName]   = model;

});

module.exports = db;