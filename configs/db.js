let Sequelize = require('sequelize');

let db = new Sequelize('blogify', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // 'mariadb'|'sqlite'|'postgres'|'mssql'

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  // storage: 'path/to/database.sqlite'
});

module.exports = db;
