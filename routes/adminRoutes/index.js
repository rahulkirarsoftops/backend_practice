//App
const app = require("../../app");
const { adminUser } = require("./userRoutes");

const get_all_users = app.use("/get_all_users", adminUser);
module.exports = { get_all_users };
