import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path = require("path");

dotenv.config();
const port = process.env.PORT || 3000;
const app: Express = express();
app.get("/", (req, res) => {
  res.send("typescript live");
});

app.listen(port, () => {
  console.log("listening on server port " + port);
});
