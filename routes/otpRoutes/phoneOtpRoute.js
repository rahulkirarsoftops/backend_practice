const express = require("express");
const phoneOtpRoute = express.Router();
const { phoneOtpController } = require("../../controllers");

phoneOtpRoute.route("/").post(phoneOtpController);

module.exports = phoneOtpRoute;
