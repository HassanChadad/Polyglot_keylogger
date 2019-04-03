const express = require("express");
const app = express(); // creates an express application
app.use(express.json()); // this will make the app parse json body sent in the POST request

var keys = "";

app.post("/", (req, res) => {
  keys += req.body.key;
  res.send(keys);
});

app.listen(5555, () => console.log("Listening on port 5555"));
