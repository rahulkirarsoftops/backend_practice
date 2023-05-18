const express = require("express");
const documentRoute = express.Router();
const { documentController } = require("../../controllers");
//App
const app = require("../../app");

documentRoute.route("/").post(documentController);

const add_document = app.use("/add_document", documentRoute);

module.exports = { add_document };
