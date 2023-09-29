import { Router } from "express";

import { isTokenValid, signup, signin, updateUsername, deleteUsername, getUserEmailById  } from '../controllers/auth.js'
import verifyAuth from '../middleware/verifyAuth.js'
const router = Router()

router.get('/isTokenValid', isTokenValid, verifyAuth);
router.post('/signup', signup);
router.post('/signin', signin);
router.put('/updateUsername', updateUsername);
router.delete('/deleteUsername', deleteUsername);

// New route to get user email by ID
router.get('/users/:userId/email', getUserEmailById);

export default router;