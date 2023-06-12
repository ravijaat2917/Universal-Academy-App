import express, { json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import StudentRoutes from "./Routes/Student.Routes.js";
import AdminRoutes from './Routes/Admin.Routes.js';
import path from "path";
import { fileURLToPath } from "url";
import connectDb from "./DB/connectDb.js";

const app = express();

dotenv.config();

connectDb(process.env.DATABASE_URL);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/v1", StudentRoutes);
app.use("/api/v1", AdminRoutes);


app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(8080, () => {
  console.log(`Server Listening on Port 8080`);
});
