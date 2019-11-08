const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Stats
      .find(req.query)
      .sort({ wins: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Stats
      .update(
        {
          player: req.body.player,
          subfaction: req.body.subfaction,
        },
        {
          $set: {
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