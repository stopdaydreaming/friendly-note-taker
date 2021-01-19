//get data
const db = require("../db/db.json");
//unique user id
// import { v4 as uuidv4 } from 'uuid';

module.exports = function(app) {
  // get data
  app.get("/api/notes", function(req, res) {
    fs.readFile("../db/db.json", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  //create data
  app.post("/api/notes", function(req, res) {
    fs.readFile("../db/db.json", (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      notes.push(req.body);
      res.json(true);
    });
  });

  //delete data
  //use this for unique id => uuidv4();
  app.delete("/api/notes/:id", function(req, res) {
    const noteId = req.params.id;

    fs.readFile("./db/db.json", (err, data) => {
      //error handling
      if (err) throw err;
      //parse data contents into array of objects
      const noteData = JSON.parse(data);
      const newData = noteData.filter(note => note.id !== noteId);
      const newJSON = JSON.stringify(newData);

      fs.writeFile("../db/db.json", newJSON, err => {
        //error handling
        if (err) throw err;
      });
      res.send("Note Deleted.");
    });
  });
};
