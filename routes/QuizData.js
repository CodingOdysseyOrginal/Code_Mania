import express from "express";
import { getAllQuizData } from "../controllers/QuizData.js";

//set up router
const router = express.Router();

//GET ALL QUIZ DATA
router.get("/", getAllQuizData)

export default router;