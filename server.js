import express from 'express';
import connectDatabase from './config/db';

// Intialize express application
const app = express();


// Initialize express application
connectDatabase();

// API Endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

// connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));
