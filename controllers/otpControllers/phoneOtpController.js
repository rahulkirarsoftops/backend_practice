const { Signup, Phone_otp } = require("../../collections");

const phoneOtpController = async (request, response) => {
  let payload = request.body;
  let email = payload?.email;
  let phone = payload?.phone;
  let otp = payload?.otp;

  let authUser = await Signup.findOne({
    email,
  });

  let isPhoneNumber = await Phone_otp.findOne({
    phone,
  });

  let _id = authUser?._id;

  if (authUser.length == 0) {
    response.status(400).send({ error: "otp expire or email not found" });
  } else {
    let isTrue = isPhoneNumber?.otp == otp;
    if (!isTrue) {
      response.status(400).send({ error: "Otp not mached" });
    } else {
      let updateUser = await Signup.updateOne(
        { _id },
        { $set: { phone: phone } }
      );
      response.status(200).send({ message: "Phone number verify", updateUser });
    }
  }
};

module.exports = { phoneOtpController };
