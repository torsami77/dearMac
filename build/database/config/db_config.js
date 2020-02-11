"use strict";

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_DATABASE,
    host: process.env.TEST_DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.STAGED_DB_USER,
    password: process.env.STAGED_DB_PASSWORD,
    database: process.env.STAGED_DB_DATABASE,
    host: process.env.STAGED_DB_HOST,
    dialect: 'postgres'
  }
};
//# sourceMappingURL=db_config.js.map