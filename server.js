const path = require("path");
const fs = require("fs");
const express = require("express");

//create instance of express
const app = express();

//create port
const PORT = process.env.PORT || 3000;

//add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listen on port
app.listen(PORT, function() {
    console.log(`app listening on http://localhost:${PORT}`);
});