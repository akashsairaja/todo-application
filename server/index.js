const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const Logger = require("morgan");
const cors = require("cors");

const Routes = require("./routes");
require("./client");

const app = express();
const server = new http.Server(app);
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  Logger(":date> :method :url - {:referrer} => :status (:response-time ms)")
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(Routes);

let datetime = new Date();
server.listen(port, () => {
  console.log(
    ` => Server started on ${datetime} port http://localhost:${port}`
  );
});

exports.server = server;
