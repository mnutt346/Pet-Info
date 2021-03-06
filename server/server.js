const express = require("express");
const bodyParser = require("body-parser");
const model = require("../database/models/Pet_Info.js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/info/:pet_id", (req, res) => {
  // extract pet_id from request
  let pet_id = req.params.pet_id;
  console.log("req in service GET: ", req.params.pet_id);

  // call model.getPetById(pet_id);
  model.getPetById(pet_id, petInfo => {
    // send response with pet info to client
    res.status(200).send(petInfo);
  });
});

const port = 3000;

let server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
