const managerRouter = require("express").Router();

const {
  getAllManagers,
  getManagerById,
  createNewManager,
  updatedManager,
  deleteManagerById,
} = require("./controller");

managerRouter.get("/", getAllManagers);

managerRouter.get("/:id", getManagerById);

managerRouter.post("/", createNewManager);

managerRouter.patch("/:id", updatedManager);

managerRouter.delete("/:id", deleteManagerById);

module.exports = managerRouter;
