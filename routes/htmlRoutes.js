const path = require("path");

module.exports = function(app) {
    //html routes
    //notes page
    app.get("/db", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}