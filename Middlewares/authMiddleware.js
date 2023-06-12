import studentModel from "../Models/studentModel.js";
export const authMiddleware = async (req, res, next) => {
  try {
    const _id = req.headers["authorization"].split(" ")[1];

    const user = await studentModel.findById(_id);
    if (user.isAdmin === true) {
      next();
    } else {
      return res.status(200).send({ message: "Auth Failed", success: false });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error In authetication middleware" });
  }
};
