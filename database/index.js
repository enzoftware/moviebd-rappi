const config = require('../config/index');
const Sequelize = require('sequelize');
var sequelize = new Sequelize(config.dbConnectionString);
require('sequelize-values')('sequelize');

module.exports = sequelize;
