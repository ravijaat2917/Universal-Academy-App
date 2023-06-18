import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    certificateID: {
      type: String,
      required:true,
    },
    course: {
      type: String,
      required: true,
    },
    student: {
      type: mongoose.ObjectId,
      ref: "users",
      required: true,
    }, photo: {
      data: Buffer,
      contentType: String,
    },
    verificationLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const certificateModel = mongoose.model("certificates", certificateSchema);

export default certificateModel;
