const { Signup, Document_Schema } = require("../../collections");

const documentController = async (request, response) => {
  let body = request.body;
  let { _id, pancard, aadharcard } = body;

  const authUser = await Signup.findOne({
    _id,
  });

  const isDocument = await Document_Schema.findOne({
    userId:_id,
  });

  let payload = {
    user: authUser,
    pancard,
    aadharcard,
    userId:authUser?._id
  };

  if (!isDocument) {
    if (authUser) {
      let document = await Document_Schema(payload);
      let result = await document.save();
      response.status(200).send({ data: result, message: "Document Added" });
    } else {
      response.status(400).send({ error: "User not found" });
    }
  } else {
    response.status(400).send({ error: "Document already exist" });
  }
};

module.exports = { documentController };
