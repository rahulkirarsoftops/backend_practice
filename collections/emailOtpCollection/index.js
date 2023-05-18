const { Schema, model } = require("mongoose");

const emailOtpSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: 120 },
    },
  },
  { timestamps: true }
);

module.exports.Email_otp = model("email_otp", emailOtpSchema);
