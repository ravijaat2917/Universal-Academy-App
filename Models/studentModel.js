import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    registration: { type: String , required:true },
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    phone: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    gender: { type: String },
    guardian: { type: String },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    course: { type: String },
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