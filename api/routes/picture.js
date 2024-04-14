import express from "express";
import { createPicture } from "../controllers/pictureController.js";

const pictureRouter = express.Router()

pictureRouter.post("/", createPicture)

export default pictureRouter;