const express = require('express');
const app = express();
const path = require("path");

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory (optional, only needed if your views are in a custom folder)
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to render EJS file
app.get("/", (req, res) => {
    res.render("layouts/boilerplate"); // No need for ".ejs"
});

// Start the server
app.listen(8080, () => {
    console.log("App is listening at port 8080");
});
