import express from "express"
import {signup,login,logout,updateProfile, checkAuth} from "../controllers/auth.controller.js";
import { protecteRoute } from "../middleware/auth.middelware.js";

const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

router.put("/update-profile",protecteRoute,updateProfile)

router.get("/check",protecteRoute,checkAuth)

export default router;
