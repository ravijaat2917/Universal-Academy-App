import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required:true,
    },
    student: {
      type: mongoose.ObjectId,
      ref: "users",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    verificationLink: {
      type: String,
      verified: true,
    },
  },
  { timestamps: true }
);

const certificateModel = mongoose.model("certificates", certificateSchema);

export default certificateModel;
