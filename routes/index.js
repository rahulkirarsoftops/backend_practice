const { signup } = require("./authRoutes");
const { email_otp } = require("./otpRoutes");
const { get_all_users } = require("./adminRoutes");
const { update_user_many } = require("./updateAllUserRoute");
const { user_add_route } = require("./userDataRoutes");
const { add_document } = require("./documentRoutes");

module.exports = {
  signup,
  email_otp,
  get_all_users,
  update_user_many,
  user_add_route,
  add_document,
};
