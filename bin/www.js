import app from '../app.js';
import dotenv from "dotenv";

dotenv.config(); 

const PORT = process.env.PORT || 4000;


app.listen(PORT, function () {
    console.log(`Lets do this http://localhost:${PORT}`);
})
