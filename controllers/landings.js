const { Landings } = require("../models/landing");

const getAll = async (req, res) => {
  const landing = await Landings.find();
  res.json(landing);
};

const getById = async (req, res) => {
  const landing = await Landings.findById(req.params.landingId);

  res.json(landing);
};

const getByNameandMass = async (req, res) => {
  const landing = await Landings.find(req.query.mass);
  const minMass = landing.mass;
  if (minMass >= 2000) {
    return res.send(minMass);
  } else {
    res.send(landing);
  }
};

const getByMass = async (req, res) => {
  try {
    const landing = await Landings.find({
      mass: req.params.mass,
    });

    if (!landing) {
      return res.status(404).json({ error: "Landing not found" });
    }

    res.send(landing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getByClass = async (req, res) => {
  const landing = await Landings.find({
    recclass: req.params.recclass,
  });
  res.json(landing);
};

const create = async (req, res) => {
  const newLanding = await Landings.create(req.body);
  res.json(newLanding);
};

const update = async (req, res) => {
  const landing = await Landings.findByIdAndUpdate(
    req.params.landingId,
    req.body,
    {
      new: true,
    }
  );
  res.json(landing);
};

const remove = async (req, res) => {
  const landing = await Landings.findByIdAndDelete(req.params.landingId);
  res.json(landing);
};

module.exports = {
  getAll,
  getById,
  getByNameandMass,
  getByMass,
  getByClass,
  create,
  update,
  remove,
};
