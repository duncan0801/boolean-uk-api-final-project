const playerRouter = require("express").Router();

const {
  getAllPlayers,
  getPlayerById,
  createNewPlayer,
  updatedPlayer,
  deletePlayerById,
} = require("./controller");

playerRouter.get("/", getAllPlayers);

playerRouter.get("/:id", getPlayerById);

playerRouter.post("/", createNewPlayer);

playerRouter.patch("/:id", updatedPlayer);

playerRouter.delete("/:id", deletePlayerById);

module.exports = playerRouter;
