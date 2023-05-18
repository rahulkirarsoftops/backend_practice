const { userUpdateManyController } = require("../../controllers");
const express = require("express");
//App
const app = require("../../app");

const updateUserManyRoute = express.Router();

updateUserManyRoute.route("/").get(userUpdateManyController);

const update_user_many = app.use("/update_user_many", updateUserManyRoute);
module.exports = { update_user_many };
