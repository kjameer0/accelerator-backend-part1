import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import animeRouter from "./controller/anime";
import path from "node:path";
const app: Express = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use("/anime", animeRouter);

app.get("/", (req, res) => {
  res.send("typescript live");
});

const appServer = app.listen(port, () => {
  console.log("listening on server port " + port);
});

export default appServer;
