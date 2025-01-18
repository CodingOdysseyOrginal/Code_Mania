import { pool } from "../db/index.js";

export async function getAllQuizDataFromDB() {
  try {
    const result = await pool.query("SELECT * FROM quizdata");
    return result.rows;
  } catch (error) {
    console.error("Error excecuting query", error);
    throw error;
  }
}
