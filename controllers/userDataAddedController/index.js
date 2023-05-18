const { Signup } = require("../../collections");

const userDataAddController = async (request, response) => {
  const payload = request.body;
  const { fullname, dob, gender, occupaton, _id } = payload;

  const authUser = await Signup.findOne({
    _id,
  });

  const userAddPayload = {
    fullname,
    dob,
    gender,
    occupaton,
  };

  if (authUser) {
    const result = await Signup.updateOne({ _id }, userAddPayload);
    if (result?.acknowledged == true) {
      response.status(200).send({ message: "user data added" });
    } else {
      response
        .status(400)
        .send({ error: "something is wrong or user not found" });
    }
  } else {
    response
      .status(400)
      .send({ error: "something is wrong or user not found" });
  }
};

module.exports = { userDataAddController };
