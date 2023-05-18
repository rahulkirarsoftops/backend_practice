const { Schema, model } = require("mongoose");

const phoneOtpSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    email: {
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

module.exports.Phone_otp = model("phone_otp", phoneOtpSchema);
