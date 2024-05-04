import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path = require("path");
dotenv.config();

const app: Express = express();
app.use("/static", express.static(path.join(__dirname, "..", "public")));
app.get("/", (req: Request, res: Response) => {
  const htmlPath = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(htmlPath);
});

app.listen(process.env.PORT, () => {
  console.log("server is listening");
});
