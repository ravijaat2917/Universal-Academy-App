import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });
    console.log(`DataBase Connected Successfully.`);
  } catch (error) {
    console.log("MongoDB Server Issue" + error);
  }
};
export default connectDB;