import inquiryModel from "../Models/inquiryModel.js";
import studentModel from "../Models/studentModel.js";
import jsontoken from 'jsonwebtoken';

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export const createNewInquiry = async (req, res) => {
  try {
    const createInquiry = new inquiryModel({
      name: capitalizeFirstLetter(req.body.name),
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    const alreadySend = await inquiryModel.find({
      phone: req.body.phone,
      email: req.body.email,
      isRead: false,
    });
    if (alreadySend.length >= 1) {
      res.status(200).send({ success: true, message: "Inquiry Already Send" });
    } else {
      await createInquiry.save();
      res
        .status(201)
        .send({ success: true, message: "Inquiry Send Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating New Inquiry",
      error,
    });
  }
};

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await studentModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "User Already Exists" });
    }
    const newUser = new studentModel({
      name: capitalizeFirstLetter(name),
      email,
      password,
    });
    await newUser.save();
    return res
      .status(200)
      .send({ success: true, message: "Registeration Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Register Controller : ${error.message}`,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await studentModel.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .send({ success: false, message: "User Not Found" });
    }
    if (password !== user.password) {
      return res
        .status(200)
        .send({ status: false, message: "Invalid Email or Password" });
    }
    // const token = user._id;
    const token = jsontoken.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res
      .status(200)
      .send({
        success: true,
        message: "Login Successfully",
        token,
        isAdmin: user.isAdmin,
        user,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Login Controller : ${error.message}`,
    });
  }
};

export const getUserController = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await studentModel.findById(id).select("-password");
    if (user) {
      res
        .status(200)
        .send({ success: true, message: "Getting User Successfully", user });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Error in Getting User " });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Getting user", error });
  }
};
