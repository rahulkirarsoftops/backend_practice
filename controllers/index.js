const { signupController, phoneController } = require("./authControllers");
const { emailOtpController, phoneOtpController } = require("./otpControllers");
const { getAllUsersController } = require("./adminControllers");
const { userUpdateManyController } = require("./updateAlluserController");
const { userDataAddController } = require("./userDataAddedController");
const { documentController } = require("./documentController");

module.exports = {
  signupController,
  emailOtpController,
  phoneController,
  phoneOtpController,
  getAllUsersController,
  userUpdateManyController,
  userDataAddController,
  documentController,
};
