import Express from "express";
import {
  addNewVerifiedStudentController,
  deleteAllReadCOntroller,
  deleteCertificateController,
  deleteReadController,
  deleteSingleStudent,
  getAllCertificatesController,
  getAllStudents,
  getCertificateImageBinaryData,
  getReadInquiries,
  getSingleStudentDetails,
  getUnreadInquiries,
  getUserByCertificateID,
  markAllReadCOntroller,
  markReadController,
  studentDetailsForCertificate,
  updateVerifiedStudentController,
  uploadCertificateController,
  verifyAdminController,
} from "../Controllers/AdminController.js";
import formidable from "express-formidable";

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
router.delete("/delete/all/read", deleteAllReadCOntroller);

// Get All Students
router.get("/get/all/students", getAllStudents);

// Add a verified Student
router.post("/add/new/student", addNewVerifiedStudentController);

// GEt Single Student
router.get("/get/student/:id", getSingleStudentDetails);

// Delete Single Student
router.delete("/delete/student/:id", deleteSingleStudent);

// Update Student by Id
router.post("/update/student/:id", updateVerifiedStudentController);

// details for certificate
router.get("/certificate/details/:id", studentDetailsForCertificate);

// save certificate to database
router.post("/upload/student/certificate", formidable(), uploadCertificateController);

// get all certificates
router.get('/get/student/certificates/:id', getAllCertificatesController);

// get single certificate image
router.get('/certificate/image/:id', getCertificateImageBinaryData);

router.get('/student/by/certificate/:id', getUserByCertificateID);

router.delete('/delete/certificate/:id', deleteCertificateController);


export default router;