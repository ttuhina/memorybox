import express from 'express';
import multer from 'multer';
import { handleUpload } from '../controllers/timecapsuleController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), handleUpload);

export default router;
