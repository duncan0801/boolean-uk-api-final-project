const { manager, team } = require("../../utils/dbClient");

const getAllManagers = async (req, res) => {
  const name = req.query.name;
  const teamName = req.query.team;
  if (name) {
    try {
      const allManagers = await manager.findMany({
        where: { firstName: name },
      });
      res.json({ data: allManagers });
    } catch (error) {
      res.json({ error: error.message });
    }
    return;
  }
  if (teamName) {
    try {
      const allManagers = await team.findMany({
        where: { name: teamName },
        include: { manager: true },
      });
      res.json({ data: allManagers });
    } catch (error) {
      res.json({ error: error.message });
    }
    return;
  }

  try {
    const allManagers = await manager.findMany();
    res.json({ data: allManagers });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getManagerById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const oneManagerById = await manager.findUnique({
      where: { id },
      include: { team: true }
    });
    res.json({ data: oneManagerById });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createNewManager = async (req, res) => {
  const newManager = req.body;
  try {
    const brandNewManager = await manager.create({ data: newManager });
    res.json({ data: brandNewManager });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updatedManager = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInfo = req.body;

  try {
    const managerExist = await manager.findUnique({ where: { id } });

    if (managerExist) {
      const managerUpdate = await manager.update({
        where: { id },
        data: { ...managerExist, ...updatedInfo },
      });
      res.json({ data: managerUpdate });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteManagerById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedManager = await manager.delete({
      where: { id },
    });
    res.json({ data: deletedManager });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllManagers,
  getManagerById,
  createNewManager,
  updatedManager,
  deleteManagerById,
};
