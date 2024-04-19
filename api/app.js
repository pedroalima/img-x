import express from "express";
import { config } from "dotenv";
import process from "process";
import main from "./db.js";
import pictureRouter from "./routes/picture.js";

const app = express();
config();
main();

const port = process.env.PORT || 4040;

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
    app.use(express.static("build")); // Substitua 'build' pelo diretório de build do seu frontend React
}

app.use("/pictures", pictureRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});