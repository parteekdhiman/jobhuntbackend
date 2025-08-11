
import express from 'express';
import { loginUser, registerUser, requestPasswordReset,verifyOtp,resetPassword } from '../controllers/authController.js';



const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/request-reset', requestPasswordReset);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);




export default router;
