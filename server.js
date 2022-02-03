import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { PORT } from "./config";
import { userRoutes } from "./routes";
const app = express();
import "./database";
// all package initialization
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/v1/", userRoutes);
// error handling

app.listen(PORT, () => {
  console.log("server connected");
});
