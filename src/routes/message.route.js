import express from "express";
import { protecteRoute } from "../middleware/auth.middelware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protecteRoute,getUsersForSidebar);
router.get("/:id",protecteRoute,getMessages)

router.post("/send/:id",protecteRoute,sendMessage)

export default router;