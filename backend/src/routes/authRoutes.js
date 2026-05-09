import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  registerUser,
  loginUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user,
  });
});

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;