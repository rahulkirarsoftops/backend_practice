//App
const app = require("../../app");

const email_otp = app.use("/email_otp_verify", require("./emailOtpRoute"));
const phone_otp = app.use("/phone_otp_verify", require("./phoneOtpRoute"));
module.exports = { email_otp, phone_otp };
