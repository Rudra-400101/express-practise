const express = require("express");
const {engine}  = require('express-handlebars');
const path = require("path");
const app = express();
const port = 4000;

// app.engine('handlebars', engine({
//     extname:'.handlebars',
//     defaultLayout:false,
//     layoutsDir:'views'
// }));
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "../routes/routes.js")));

app.listen(port, () => {
  console.log(`your port are running on ${port}`);
});
       