const db = require("../db/db.json");

module.exports = function(app) {

    // get data
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    //create data
    app.post("/api/notes", function(req, res) {
        notes.push(req.body);
        res.json(true);
    });

    //delete data
    app.delete("/api/notes/:id", function(req, res) {
        const noteId = req.params.id;

        fs.readFile("./db/db.json", "utf-8", (err, data) => {
            //error handling
            if(err) throw err;
            //parse data contents into array of objects
            const parseData = JSON.parse(data);
            const newData = parseData.filter((note) => note.id !== noteId);
            const newJSON = JSON.stringify(newData);

            fs.writeFile("../db/db.json", newJSON, (err) => {
                //error handling
                if(err) throw err;
            });
            res.send("Note Deleted.");
        });
    });
}