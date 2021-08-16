const fixtureRouter = require("express").Router();

const {
  getAllFixtures,
  getFixtureById,
  createNewFixture,
  updatedFixture,
  deleteFixtureById,
} = require("./controller");

fixtureRouter.get("/", getAllFixtures);

fixtureRouter.get("/:id", getFixtureById);

fixtureRouter.post("/", createNewFixture);

fixtureRouter.patch("/:id", updatedFixture);

fixtureRouter.delete("/:id", deleteFixtureById);

module.exports = fixtureRouter;
