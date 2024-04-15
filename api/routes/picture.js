import express from "express";
import * as PictureController from "../controllers/pictureController.js";
import { upload } from "../config/multer.js";

const pictureRouter = express.Router()

pictureRouter.post("/", upload.single("file"), PictureController.create)

export default pictureRouter;