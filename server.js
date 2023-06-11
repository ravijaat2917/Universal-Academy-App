import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import StudentRoutes from "./Routes/Student.Routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

dotenv.config();

app.use(cors());
app.use(morgan("dev"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/v1", StudentRoutes);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(8080, () => {
  console.log(`Server Listening on Port 8080`);
});
