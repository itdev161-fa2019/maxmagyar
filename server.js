import express from 'express';
import connectDatabase from './config/db';

// Initialize express application
const app = express();

// Connect database
connectDatabase();

//Configure Middleware
app.use(express.json({ extended: false}));

//API Endpoints
/**
 * @route GET /
 * @desc Test Endpoint
 */
app.get('/', (req, res) =>
res.send('http get request sent to root api endpoint')
);

/**
 * @route POST api/users
 * @desc Register User
 */
app.post('api/users', (req, res) => {
    console.log(req,body);
    res.send(req, body);
});

//Connection Listener
app.listen(5000, () => console.log('Express server running on port 5000'));