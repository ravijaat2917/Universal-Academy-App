import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import StudentRoutes from "./Routes/Student.Routes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", StudentRoutes);

app.listen(8080, () => {
  console.log(`Server Listening on Port 8080`);
});
