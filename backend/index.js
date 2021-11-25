// http is an inbuilt module in Node.js
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Wooooorld!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
