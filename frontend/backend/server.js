require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authenticateToken = require('./middleware/authenticateToken');

const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors()); // Enable CORS for all routes


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Testing...'); 
});

app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Access granted to protected route' });
});

app.get('/userInfo', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Access granted to userInfo' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
