const { Signup, Phone_otp } = require("../../collections");

const phoneController = async (request, response) => {
  let payload = request.body;
  
  let email = payload?.email;
  let phone = payload?.phone;

  let authUser = await Signup.findOne({
    email
  });

  let otpPayload = {
    phone,
    otp: "1234",
    email,
  };

  console.log(authUser,"===@@@")

  if (authUser) {
    let otp = new Phone_otp(otpPayload);
    let result = await otp.save();
    response.status(200).send({ message: "otp sent successfully", result });
  } else {
    response.status(400).send({ error: "Email not found" });
  }
};

module.exports = { phoneController };
