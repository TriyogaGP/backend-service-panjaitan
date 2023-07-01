const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  DEVELOPMENT: {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "userrootwin",
    PASSWORD: process.env.DB_PASSWORD || "userrootwin",
    DB: process.env.DB_NAME || "db_panjaitan",
    PORT: process.env.DB_PORT || 3306,
  },
  PRODUCTION: {
    HOST: process.env.DB_HOST || "103.186.0.54",
    USER: process.env.DB_USER || "yoga",
    PASSWORD: process.env.DB_PASSWORD || "Pass@word1",
    DB: process.env.DB_NAME || "panjaitan",
    PORT: process.env.DB_PORT || 3306,
  },
};

const data = process.env.NODE_ENV === 'production'
  ? config.PRODUCTION
  : config.DEVELOPMENT;

// create connection
const sequelizeInstance = new Sequelize(data.DB, data.USER, data.PASSWORD, {
    host: data.HOST,
    port: data.PORT,
    dialect: 'mysql',
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },
    timezone: '+07:00'
});
 
// export connection
module.exports = {
  sequelizeInstance,
  Sequelize
};