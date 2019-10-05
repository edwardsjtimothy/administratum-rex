const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Stats
      .find(req.query)
      .sort({ wins: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.Stats
      .find({ player: "Tim" })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Stats
      .put(
        {
          player: req.body.player
        },
        {
          $set: {
            faction: req.body.faction,
            subfaction: req.body.subfaction,
            wins: req.body.wins,
            losses: req.body.losses
          }
        }
      )
  },

  create: function (req, res) {
    db.Stats
      .create(
        {
          player: req.body.player,
          faction: req.body.faction,
          subfaction: req.body.subfaction,
          wins: req.body.wins,
          losses: req.body.losses
        }
      )
  },
};