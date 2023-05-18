const express = require("express");
const adminUser = express.Router();
const { getAllUsersController } = require("../../../../controllers");

adminUser.route("/").get(getAllUsersController);

module.exports = {adminUser};
