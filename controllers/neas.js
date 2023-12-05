const { Neas } = require("../models/neas");

const create = async (req, res) => {
  const { neas, date } = req.body;

  const newComment = {
    neas,
    date,
    userId: req.user.id,
  };

  const createdComment = await Neas.create(newComment);
  res.json(createdComment);
};

const getAll = async (req, res) => {
  const neas = await Neas.find();
  res.json(neas);
};

const getById = async (req, res) => {
  const neas = await Neas.findById(req.params.neasId);
  res.json(neas);
};

const update = async (req, res) => {
  // Falta logica que comprueba que el comentario que el usuario logueado es el autor del comentario que se va a actualizar. si no es propietario del neas responder con un status 403 y un return para que no siga ejecutandose el controlador

  const neas = await Neas.findByIdAndUpdate(req.params.neasId, req.body, {
    new: true,
  });
  res.json(neas);
};

const remove = async (req, res) => {
  // No se usa esta operación pero de usarse hay que tener en cuenta que faltaría:

  // logica que comprueba que el comentario que el usuario logueado es el autor del comentario que se va a actualizar. si no es propietario del neas responder con un status 403 y un return para que no siga ejecutandose el controlador

  const neas = await Neas.findByIdAndDelete(req.params.neasId);
  res.json(neas);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
