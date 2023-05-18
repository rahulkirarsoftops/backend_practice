const express = require("express");
const emailOtpRoute = express.Router();
const { emailOtpController } = require("../../controllers");

emailOtpRoute.route("/").post(emailOtpController);

module.exports = emailOtpRoute;
