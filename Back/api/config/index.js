const  Sequelize  = require("sequelize");

const db = new Sequelize(
   "movie",null,null,
  {
    dialect: "postgres",
    host:"localhost",
    logging: false,
  }
);

module.exports = db;