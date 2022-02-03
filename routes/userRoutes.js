import express from "express";
let userRoutes = express.Router();

import { userController } from "../controller";

userRoutes.get("/", userController.testing);
export default userRoutes;
