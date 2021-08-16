const { player } = require("../../utils/dbClient");

const getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await player.findMany();
    res.json({ data: allPlayers });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getPlayerById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const onePlayerById = await player.findUnique({
      where: id,
    });
    res.json({ data: onePlayerById });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createNewPlayer = async (req, res) => {
  const newPlayer = req.body;
  try {
    const brandNewPlayer = await player.create({ data: newPlayer });
    res.json({ data: brandNewPlayer });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updatedPlayer = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInfo = req.body;

  try {
    const playerExist = await player.findUnique({ where: { id } });

    if (playerExist) {
      const playerUpdate = await player.update({
        where: { id },
        data: { ...playerExist, ...updatedInfo },
      });
      res.json({ data: playerUpdate });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deletePlayerById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedPlayer = await player.delete({
      where: id,
    });
    res.json({ data: deletedPlayer });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  createNewPlayer,
  updatedPlayer,
  deletePlayerById,
};
