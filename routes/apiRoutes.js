const db = require("../db/db.json");

module.exports = function(app) {

    // get data
    app.get("/api/db", function(req, res) {
        res.json(db);
    });

    //create data
    app.post("/api/db", function(req, res) {
        db.push(req.body);
        res.json(true);
    })
}