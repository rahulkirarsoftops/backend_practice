const express = require("express");
const signupRoute = express.Router();
const { signupController } = require("../../controllers");

signupRoute.route("/").post(signupController);

module.exports = signupRoute;
