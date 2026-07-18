import { Router } from "express";
import multer from "multer";
import path from "path";
import { handleUpload } from "../controllers/upload.controller.js";
const uploadRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.pdf';
    cb(null, Date.now().toString() + ext);
  }
});

const upload = multer({ storage });

uploadRouter.post('/upload', upload.single('document'), handleUpload);

export default uploadRouter;