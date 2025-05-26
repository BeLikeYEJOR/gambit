import { Router } from "express";
import games from "./games/index.js";

export default new Router()
  .get("/health", (req, res) => res.status(200).json({}))
  .use("/games", games);
