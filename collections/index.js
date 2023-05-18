const { Signup } = require("./authCollection");
const { Email_otp } = require("./emailOtpCollection");
const { Phone_otp } = require("./phoneOtpCollection");
const {Document_Schema} = require("./documentCollection")

module.exports = { Signup, Email_otp, Phone_otp,Document_Schema };
