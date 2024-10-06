import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
