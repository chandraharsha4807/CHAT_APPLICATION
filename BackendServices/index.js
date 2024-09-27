const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();
const cors = require("cors");

const setRouter = require("./userServices/routes/userRoutes");
const chat = require("./chatModule/routes/chatRoutes");

const port = 3000;

app.use(bodyParser.json()); // This line sets up the middleware for parsing incoming JSON request bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // This line sets up the middleware for parsing incoming URL-encoded request bodies.
app.use(cors());

setRouter.userRoutes(app);
console.log(chat)
chat.chatRoutes(app);

app.get("/events", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "cache-control": "no-cache",
    Connection: "keep-alive",
  });

  const loginText =
    "This line sets up the middleware for parsing incoming URL-encoded request bodies. This line sets up the middleware for parsing incoming URL-encoded request bodies.";
  const words = loginText.split(" ");
  let index = 0;

  const sendWords = () => {
    if (index < words.length) {
      res.write(`data: ${words[index]}\n\n`);
      index++;
    } else {
      clearInterval(intervalId);
    }
  };
  const intervalId = setInterval(sendWords, 500);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
