//App
const app = require("../../app");

const signup = app.use("/signup", require("./signupRoute"));
const phone = app.use("/phone", require("./phoneRoute"));
module.exports = { signup, phone };
