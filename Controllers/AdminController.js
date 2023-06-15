import inquiryModel from "../Models/inquiryModel.js";
import studentModel from "../Models/studentModel.js";
import jsontoken from "jsonwebtoken";

export const getReadInquiries = async (req, res) => {
  try {
    const data = await inquiryModel.find({ isRead: true });
    res.status(200).send({
      success: true,
      message: "Inquiries Getting Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Getting Inquiries", error });
  }
};

export const getUnreadInquiries = async (req, res) => {
  try {
    const data = await inquiryModel.find({ isRead: false });
    res.status(200).send({
      success: true,
      message: "Inquiries Getting Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Getting Inquiries", error });
  }
};

export const authController = async (req, res) => {
  try {
    const user = await studentModel.findOne({ _id: req.body.userId });
    if (!user) {
      return res
        .status(200)
        .send({ success: false, message: "User Not Found" });
    } else {
      return res.status(200).send({
        success: true,
        message: "User Authenticated",
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Authentication Error", error });
  }
};

export const verifyAdminController = async (req, res) => {
  try {
    const { jwt } = req.body;
    const match = jsontoken.verify(jwt, process.env.JWT_SECRET);
    if (match) {
      res.status(200).send({ success: true, message: "Admin Authenticated" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Admin Authenticated Error" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Admin Verification" });
  }
};

export const markReadController = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await inquiryModel.findByIdAndUpdate(_id, {
      isRead: true,
    });
    res.status(200).send({
      success: true,
      message: "Updated Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Updating Inquiry", error });
  }
};

export const deleteReadController = async (req, res) => {
  try {
    const { _id } = req.params;
    await inquiryModel.findByIdAndDelete(_id);
    res.status(200).send({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Updating Inquiry", error });
  }
};

export const markAllReadCOntroller = async (req, res) => {
  try {
    await inquiryModel.updateMany({ isRead: false }, { isRead: true });
    res.send({ success: true, message: "Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const deleteAllReadCOntroller = async (req, res) => {
  try {
    await inquiryModel.deleteMany({ isRead: true });
    res.send({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const data = await studentModel.find({ verified: true });
    res
      .status(200)
      .send({ success: true, message: "Students Getting Successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
