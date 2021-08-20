const { player, team } = require("../../utils/dbClient");

const getAllPlayers = async (req, res) => {
  const name = req.query.name;
  const teamName = req.query.team;
  if (name) {
    try {
      const allPlayers = await player.findMany({ where: { firstName: name } });
      res.json({ data: allPlayers });
    } catch (error) {
      res.json({ error: error.message });
    }
    return;
  }
  if (teamName) {
    try {
      const allPlayers = await team.findMany({
        where: {
          name: {
            contains: teamName
          }
        },
        select: { players: true }
      });
      console.log(allPlayers)
      let playerList = []
      for (const playerSet of allPlayers) {
        playerList = [...playerList, ...playerSet.players]
      }
      res.json(playerList);
    } catch (error) {
      res.json({ error: error.message });
    }
    return;
  }

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
      where: {id},
      include: {
        team : true
      }
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
      where: {id},
    });
    res.json({ data: deletedPlayer });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// const getPlayerByName = async (req, res) => {
//   const firstName = req.params.firstName;
//   //   const lastName = req.params.lastName;

//   try {
//     const playerByName = await player.findMany({
//       where: {
//         firstName,
//       },
//     });
//     res.json({ data: playerByName });
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// };

// const getPlayerByTeam = async (req, res) => {
//   const team = req.params.team;

//   try {
//     const playerByTeam = await player.findMany({
//       where: {
//         team,
//       },
//     });
//     res.json({ data: playerByTeam });
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// };

module.exports = {
  getAllPlayers,
  getPlayerById,
  createNewPlayer,
  updatedPlayer,
  deletePlayerById,
};
