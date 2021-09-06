//this is the access point for all things database related!

const db = require("./db");

const Food = require("./models/Food");
const Beer = require("./models/Beer");
const Wine = require("./models/Wine");

//associations could go here!

module.exports = {
  db,
  models: {
    Food,
    Beer,
    Wine,
  },
};
