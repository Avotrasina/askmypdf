import express from "express";
import cors from "cors";
import uploadRouter from "./routes/upload.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', uploadRouter);


export default app;