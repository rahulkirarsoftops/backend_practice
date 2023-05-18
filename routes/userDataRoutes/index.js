const {userAddRoute} = require("./userDataAddRoute")
const app = require("../../app")

const user_add_route = app.use("/user_add", userAddRoute);

module.exports = { user_add_route };
