import { Router } from "express";

const games = new Map();

export default new Router()
  .get("/", (req, res) => {
    res.json({ games });
  })
  .post("/", (req, res) => {
    const body = req.body;

    const newGame = {
      code: computeCode(),
      type: body.type || "Libbit",
      playere: [],
    };

    games.set(newGame.code, newGame);

    res.json({ game: newGame });
  });

function computeCode() {
  return "ABCD";
}
