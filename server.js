const express = require("express");
const app = express();

let port = 5000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

console.log('Running in :' + process.env.NODE_ENV);