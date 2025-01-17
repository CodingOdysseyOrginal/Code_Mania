import express from 'express';
import morgan from 'morgan'
import cors from 'cors';

// Initializations
const app = express();
//sets up morgon for logging http requests
app.use(morgan('dev'));

// uses cors for security
app.use(cors());

// uses express to parse json
app.use(express.json());

// Routes
app.use('/Code_Mania', (req, res) => {
    res.send('Welcome to Code Mania!');
  });

export default app;