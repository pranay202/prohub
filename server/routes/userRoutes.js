import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "../controller/user-controller.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

export default router;
