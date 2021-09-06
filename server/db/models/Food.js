const Sequelize = require("sequelize");
const db = require("../db");

const axios = require("axios");

const Food = db.define("food", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Food;
