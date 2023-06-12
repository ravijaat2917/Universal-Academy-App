import inquiryModel from "../Models/inquiryModel.js";
import studentModel from "../Models/studentModel.js";

export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await inquiryModel.find({ isRead: false });
    res.status(200).send({
      success: true,
      message: "Inquiries Getting Successfully",
      inquiries,
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