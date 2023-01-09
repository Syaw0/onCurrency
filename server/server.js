const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readFileSync, writeFileSync } = require("fs");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(
  cors({
    origin: "*",
    preflightContinue: false,
    allowedHeaders: "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../public/index.html");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` server is listening on localhost:${port} `);
});
