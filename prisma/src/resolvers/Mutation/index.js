const Card = require("./Card");
const User = require("./User");
const Script = require("./Script");

module.exports = {
  ...Card,
  ...User,
  ...Script
};
