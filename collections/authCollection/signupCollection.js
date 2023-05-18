const { Schema, model } = require("mongoose");

const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone: String,
    fullname: String,
    dob: String,
    gender: String,
    occupaton: String,
    role: String,
  },
  { timestamps: true }
);

module.exports = model("authUsers", emailSchema);
