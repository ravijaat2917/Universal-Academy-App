import Express from "express";
import {
  deleteReadController,
  getReadInquiries,
  getUnreadInquiries,
  markReadController,
  verifyAdminController,
} from "../Controllers/AdminController.js";

const router = Express.Router();

// Get Inquiries
router.get("/get/read/inquiries", getReadInquiries);
router.get("/get/unread/inquiries", getUnreadInquiries);

// Admin Verification By JWT
router.post("/verify/admin", verifyAdminController);

// Make unread file read by Id
router.put("/mark/read/:_id", markReadController);

// delete query by ID
router.delete("/delete/unread/:_id", deleteReadController);

export default router;
