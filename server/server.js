const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { Server } = require("ws");
const getCurrentData = require("./scrapData");
dotenv.config();
const wsServer = new Server({ port: 3232 }, () => {
  console.log("websocket listen on 3232");
});

wsServer.on("connection", (ws) => {
  console.log("one socket connected by ");
});

setInterval(async () => {
  const clients = wsServer.clients;
  // get fresh data and send it across all ws
  if (clients.length == 0) {
    return;
  }

  let data, resp;
  try {
    data = await getCurrentData();
    if (!data.status) {
      throw new Error();
    }
    resp = { status: true, data: data.data };
  } catch (err) {
    resp = { status: false, msg: "error during scrap" };
  }
  clients.forEach((c) => {
    c.send(JSON.stringify(resp));
  });
}, 3000);

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
  console.log(`server is listening on localhost:${port} `);
});
