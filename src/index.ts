import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config();
const port = process.env.PORT || 3000;
const app: Express = express();
//middleware establishing a part of the server that serves public assets
app.use("/static", express.static(path.join(__dirname,'..', "public")));

app.get("/", (req: Request, res: Response) => {
  const htmlPath = path.resolve(__dirname, "..", "public", "index.html");
  res.sendFile(htmlPath); 
});


const appServer = app.listen(port, () => {
  console.log("listening on server port " + port);
});

export default appServer;
