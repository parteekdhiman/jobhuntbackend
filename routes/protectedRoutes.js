// server/routes/protectedRoutes.js
import express from 'express';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/test-protected', protect, (req, res) => {
  res.json({
    message: 'Protected data access granted ✅',
    user: req.user,
  });
});

export default router;
