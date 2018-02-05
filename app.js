const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list("anime")
    .then(practice => {
      response.json({ practice });
    })
    .catch(console.error);
});

app.get("/:id", (request, response) => {
  queries
    .read(request.params.id, "anime")
    .then(anime => {
      anime ? response.json({ anime }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
