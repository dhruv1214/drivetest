// Import packages
const express = require('express');
const path = require('path');

// Initialize express
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Adjust this path to your views folder
app.use(express.static(path.join(__dirname, '../public'))); // Adjust this path to your public folder

// Start server
app.listen(4000, () => {
    console.log('App listening on port 4000');
});

// Routes for navigation
app.get('/', (req, res) => {
    res.render('index');
});
