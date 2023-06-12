import Express from "express";
import { getAllInquiries } from '../Controllers/AdminController.js';
import { authMiddleware } from "../Middlewares/authMiddleware.js";

const router = Express.Router();

// Get UnRead Inquiries
router.get('/get/inquiries',authMiddleware, getAllInquiries);



export default router;