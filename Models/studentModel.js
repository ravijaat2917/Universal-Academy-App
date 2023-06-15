import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    phone: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    guardian: { type: String },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    verified: { type: Boolean, default: false },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const studentModel = mongoose.model("users", studentSchema);

export default studentModel;
