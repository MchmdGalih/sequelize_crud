const db = require("../models");
const Entitas = db.biodata;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nama) {
    res.status(400).send({
      message: "Content can not be empety!",
    });
    return;
  }
  const biodata = {
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tgl_lahir: req.body.tgl_lahir,
    alamat: req.body.alamat,
  };

  Entitas.create(biodata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error occured while inserting biodata.",
        err,
      });
    });
};

exports.findAll = (req, res) => {
  Entitas.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving biodata.",
      });
    });
};
exports.findOne = (req, res) => {
  Entitas.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving biodata.",
      });
    });
};
exports.delete = (req, res) => {
  Entitas.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.send({
        message: `Sucess delete biodata with id = ${req.params.id}!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete biodata with id = ${req.params.id}`,
      });
    });
};
