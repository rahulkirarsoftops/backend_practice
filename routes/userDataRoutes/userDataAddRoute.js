const {userDataAddController} = require("../../controllers")
const express = require("express")

const userAddRoute = express.Router()

userAddRoute.route("/").post(userDataAddController);

module.exports = { userAddRoute };
