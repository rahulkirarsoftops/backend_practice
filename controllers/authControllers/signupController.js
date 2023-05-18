const { Signup, Email_otp } = require("../../collections");

const signupController = async (request, response) => {
  let payload = request.body;
  let otpPayload = {
    email: payload?.email,
    otp: "1234",
  };
  let authUser = await Signup.findOne({
    email: payload?.email,
  });
  if (authUser) {
    return response.status(400).send({ error: "email already register" });
  } else {
    let otp = new Email_otp(otpPayload);
    let result = await otp.save();
    response.status(200).send({ message: "otp sent successfully", result });
  }
};

module.exports = { signupController };
