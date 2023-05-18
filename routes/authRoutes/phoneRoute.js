const express = require("express");
const phoneRoute = express.Router();
const { phoneController } = require("../../controllers");

phoneRoute.route("/").post(phoneController);

module.exports = phoneRoute;
