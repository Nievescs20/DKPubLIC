const Sequelize = require("sequelize");
const db = require("../db");

const axios = require("axios");

const Wine = db.define("wine", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  cost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Wine;
