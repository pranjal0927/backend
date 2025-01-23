const express = require("express");
const dotenv = require("dotenv");
const app = express();

//dotenv config
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello backend");
});

const hostname = "127.0.0.1";

const PORT = process.env.port || 8080;

app.listen(PORT, hostname, () => {
  console.log(`server running at http://${hostname}:${PORT}`);
});
