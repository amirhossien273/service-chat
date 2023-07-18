const { Sequelize } = require("sequelize");
const config  = require("../config/app.js");

const sequelize = new Sequelize(config.config.db.db_name,
    config.config.db.db_user_name,
    config.config.db.db_pass,{
        dialect: config.config.db.db_type,
        host: config.config.db.db_host
    });

module.exports = sequelize;