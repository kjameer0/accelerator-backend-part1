import express, { Express, Request, Response, Router } from "express";
import { readFile } from "fs/promises";
import path from "path";
const router: Router = express.Router();

router.get("/", async (req, res) => {
  const animeFilePath = path.resolve(
    __dirname,
    "../..",
    "data",
    "anime-data.json"
  );
  const fileResponse = await readFile(animeFilePath);
  const fileData = JSON.parse(fileResponse.toString());
  res.json(fileData);
});

export default router;
