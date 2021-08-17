const { fixture } = require("../../utils/dbClient");

const getAllFixtures = async (req, res) => {
  try {
    const allFixtures = await fixture.findMany();
    res.json({ data: allFixtures });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getFixtureById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const oneFixtureById = await fixture.findUnique({
      where: { id },
    });
    res.json({ data: oneFixtureById });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createNewFixture = async (req, res) => {
  const newFixture = req.body;
  try {
    const brandNewFixture = await fixture.create({ data: newFixture });
    res.json({ data: brandNewFixture });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updatedFixture = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInfo = req.body;

  try {
    const fixtureExist = await fixture.findUnique({ where: { id } });

    if (fixtureExist) {
      const fixtureUpdate = await fixture.update({
        where: { id },
        data: { ...fixtureExist, ...updatedInfo },
      });
      res.json({ data: fixtureUpdate });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteFixtureById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedFixture = await fixture.delete({
      where: { id },
    });
    res.json({ data: deletedFixture });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllFixtures,
  getFixtureById,
  createNewFixture,
  updatedFixture,
  deleteFixtureById,
};
