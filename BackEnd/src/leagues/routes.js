const leagueRouter = require("express").Router();

const {
  getAllLeagues,
  getLeagueById,
  createNewLeague,
  updatedLeague,
  deleteLeagueById,
} = require("./controller");

leagueRouter.get("/", getAllLeagues);

leagueRouter.get("/:id", getLeagueById);

leagueRouter.post("/", createNewLeague);

leagueRouter.patch("/:id", updatedLeague);

leagueRouter.delete("/:id", deleteLeagueById);

module.exports = leagueRouter;
