const Sequelize = require("sequelize");
const db = require("../db");

const axios = require("axios");

const Beer = db.define("beer", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  abv: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Beer;
