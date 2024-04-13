import express from "express";
import { config } from "dotenv";
import process from "process";
import main from "./db.js";

const app = express();
config();
main();

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started in the port ${port}`)
})