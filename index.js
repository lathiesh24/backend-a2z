const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
const port = process.env.PORT || 1247;


mongoose.connect("mongodb+srv://lathieshakshitha:lathieshakshitha@akdemo.todv195.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
    
app.use(express.json());

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);