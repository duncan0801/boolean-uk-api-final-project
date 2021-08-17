const teamRouter = require("express").Router();

const {
  getAllTeams,
  getTeamById,
  createNewTeam,
  updatedTeam,
  deleteTeamById,
} = require("./controller");

teamRouter.get("/", getAllTeams);

teamRouter.get("/:id", getTeamById);

teamRouter.post("/", createNewTeam);

teamRouter.patch("/:id", updatedTeam);

teamRouter.delete("/:id", deleteTeamById);

module.exports = teamRouter;
