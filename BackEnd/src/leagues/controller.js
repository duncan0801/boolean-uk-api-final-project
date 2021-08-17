const { league } = require("../../utils/dbClient");

const getAllLeagues = async (req, res) => {
  const leagueName = req.query.name;

  if (leagueName) {
    try {
      const oneLeague = await league.findUnique({
        where: { name: leagueName },
      });
      res.json({ data: oneLeague });
    } catch (error) {
      res.json({ error: error.message });
    }
    return;
  }

  try {
    const allLeagues = await league.findMany();
    res.json({ data: allLeagues });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getLeagueById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const oneLeagueById = await league.findUnique({
      where: id,
    });
    res.json({ data: oneLeagueById });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createNewLeague = async (req, res) => {
  const newLeague = req.body;
  try {
    const brandNewLeague = await league.create({ data: newLeague });
    res.json({ data: brandNewLeague });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updatedLeague = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInfo = req.body;

  try {
    const leagueExist = await league.findUnique({ where: { id } });

    if (leagueExist) {
      const leagueUpdate = await league.update({
        where: { id },
        data: { ...leagueExist, ...updatedInfo },
      });
      res.json({ data: leagueUpdate });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteLeagueById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedLeague = await league.delete({
      where: id,
    });
    res.json({ data: deletedLeague });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllLeagues,
  getLeagueById,
  createNewLeague,
  updatedLeague,
  deleteLeagueById,
};
