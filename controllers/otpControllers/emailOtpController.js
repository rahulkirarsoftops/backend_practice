const { Email_otp, Signup } = require("../../collections");

const emailOtpController = async (request, response) => {
  let payload = request.body;
  let email = payload?.email;

  const otpHolder = await Email_otp.find({ email });

  if (otpHolder.length == 0) {
    response.status(400).send({ error: "otp expire or email not found" });
  } else {
    const rightOtpFind = otpHolder[otpHolder.length - 1];
    let isTrue = payload.otp == rightOtpFind.otp;
    if (isTrue == true) {
      let user = new Signup({ email });
      let result = await user.save();
      response.status(200).send({ message: "otp verify", result });
    } else {
      response.status(400).send({ error: "Something wrong" });
    }
  }
};

module.exports = { emailOtpController };
