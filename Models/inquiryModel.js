import mongoose from "mongoose";

const inquirySchema = await mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    isRead: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const inquiryModel = mongoose.model("inquiries", inquirySchema);

export default inquiryModel;
