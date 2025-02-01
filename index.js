const express = require('express');
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("./layouts/boilerplate.ejs");
})
app.listen(8080, () => {
    console.log("app is listening at port 8080");
});