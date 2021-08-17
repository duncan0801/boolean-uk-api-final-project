const { team } = require("../../utils/dbClient");

const getAllTeams = async (req, res) => {
  const teamName = req.query.name;

  if (teamName) {
    try {
      const oneTeam = await team.findMany({ where: { name: teamName } });
      res.json({ data: oneTeam });
    } catch (error) {
      res.json({ error: error.message });
    }
    return;
  }
  try {
    const allTeams = await team.findMany();
    res.json({ data: allTeams });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getTeamById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const oneTeamById = await team.findUnique({
      where: { id },
    });
    res.json({ data: oneTeamById });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createNewTeam = async (req, res) => {
  const newTeam = req.body;
  try {
    const brandNewTeam = await team.create({ data: newTeam });
    res.json({ data: brandNewTeam });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updatedTeam = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInfo = req.body;

  try {
    const teamExist = await team.findUnique({ where: { id } });

    if (teamExist) {
      const teamUpdate = await team.update({
        where: { id },
        data: { ...teamExist, ...updatedInfo },
      });
      res.json({ data: teamUpdate });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteTeamById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedTeam = await team.delete({
      where: { id },
    });
    res.json({ data: deletedTeam });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createNewTeam,
  updatedTeam,
  deleteTeamById,
};
