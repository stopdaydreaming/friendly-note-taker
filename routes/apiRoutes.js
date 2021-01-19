const db = require("../db/db.json");

module.exports = function(app) {

    // get data
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    //create data
    app.post("/api/notes", function(req, res) {
        db.push(req.body);
        res.json(true);
    })
}