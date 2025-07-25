import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import timecapsuleRoutes from './backend/routes/timecapsuleRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/timecapsule', timecapsuleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
