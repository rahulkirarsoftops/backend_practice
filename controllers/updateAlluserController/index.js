const { Signup } = require("../../collections");

const userUpdateManyController = async (request, response) => {
  let result = await Signup.updateMany({ $set: { role: "user" } });
  if (result) {
    response.status(200).send({ data: "data updated", result });
  } else {
    response.status(400).send({ error: "Something wrong" });
  }
};

module.exports = { userUpdateManyController };