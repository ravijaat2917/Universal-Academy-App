import express from 'express';
import { createNewInquiry, getUserController, loginController, registerController } from '../Controllers/studentController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome To Universal Academy API');
});

// Create New Inquiry
router.post('/new-inquiry', createNewInquiry);

// Register || Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

// Get User Details
router.post('/get-user', getUserController);


export default router;