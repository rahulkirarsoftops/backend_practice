const { Signup } = require("../../../../collections");

const getAllUsersController = async (request, response) => {
  let getAllUsers = await Signup.find();
  if (getAllUsers) {
    response.status(200).send({ data: getAllUsers });
  } else {
    response.status(400).send({ error: "Please try after sometime" });
  }
};

module.exports = { getAllUsersController };
