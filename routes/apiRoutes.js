//get data
const db = require("../db/db.json");
const fs = require("fs");
//unique user id
const { v4: uuidv4 } = require("uuid");

module.exports = function(app) {
  // get data
  app.get("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  //create data
  app.post("/api/notes", function(req, res) {
    const bodyText = req.body;
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      let notesID = uuidv4();
      bodyText.id = notesID;
      notes.push(bodyText);
      let notesText = JSON.stringify(notes);
      fs.writeFile("./db/db.json", notesText, (err, data) => {
        if (err) throw err;
        res.json(true);
      });
    });
  });

  //delete data
  app.delete("/api/notes/:id", function(req, res) {
    const noteId = req.params.id;

    fs.readFile("./db/db.json", (err, data) => {
      //error handling
      if (err) throw err;
      //parse data contents into array of objects
      const noteData = JSON.parse(data);
      const newData = noteData.filter(note => note.id !== noteId);
      const newJSON = JSON.stringify(newData);

      fs.writeFile("./db/db.json", newJSON, err => {
        //error handling
        if (err) throw err;
      });
      res.send("Note Deleted.");
    });
  });
};
