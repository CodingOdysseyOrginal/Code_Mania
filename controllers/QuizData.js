// database connections
import { getAllQuizDataFromDB } from "../model/QuizData.js";



export async function getAllQuizData(req, res) {
    try {
        const quizData = await getAllQuizDataFromDB();
        res.status(200).json({ status: "success", data: quizData });
    } catch (error) {
        console.error("Error getting quiz data from controller getAllQuizData function", error);
        res.status(500).json({status: "error", message: error.message});
    }
}