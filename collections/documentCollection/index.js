const { Schema, model } = require("mongoose");

const documentSchema = new Schema(
  {
    user: {
      type: Object,
      required: true,
    },
    pancard: {
      type: String,
      required: true,
    },
    aadharcard: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Document_Schema = model("userDocument", documentSchema);
