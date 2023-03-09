import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const Database = process.env.MONGO_DB;

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));

mongoose
    .connect(Database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    )
    .catch((error) => console.log(error.message));

app.use("/auth", authRoute);
