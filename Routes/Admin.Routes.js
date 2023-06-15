import Express from "express";
import {
  deleteAllReadCOntroller,
  deleteReadController,
  getAllStudents,
  getReadInquiries,
  getUnreadInquiries,
  markAllReadCOntroller,
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

// AMrk All inquiries Read
router.put("/mark/all/read", markAllReadCOntroller);

// Delete All Read Inquiries
router.delete('/delete/all/read', deleteAllReadCOntroller);

// Get All Students
router.get('/get/all/students', getAllStudents);

export default router;
