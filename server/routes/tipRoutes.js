import express from "express";
import { getRandomTip, submitTipAnswer } from "../controllers/tipController.js";

const router = express.Router(); 

router.get("/random", getRandomTip);
router.post("/answer", submitTipAnswer);

export default router;
