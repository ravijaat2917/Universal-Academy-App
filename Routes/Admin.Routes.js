import Express from "express";
import {  deleteReadController, getReadInquiries, getUnreadInquiries, markReadController, verifyAdminController } from '../Controllers/AdminController.js';

const router = Express.Router();

// Get UnRead Inquiries
router.get('/get/read/inquiries',  getReadInquiries);
router.get('/get/unread/inquiries',  getUnreadInquiries);


router.post('/verify/admin', verifyAdminController);

router.put('/mark/read/:_id', markReadController);

router.delete('/delete/unread/:_id',deleteReadController);




export default router;