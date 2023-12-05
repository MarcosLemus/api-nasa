const { User } = require("../models/user");

const getAll = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

const getById = async (req, res) => {
  const user = await User.findById(req.params.userId);

  res.json(user);
};

const create = async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
};

const update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
    new: true,
  });
  res.json(user);
};

const remove = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.userId);
  res.json(user);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
