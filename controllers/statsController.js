const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Stats
      .find(req.query)
      .sort({ wins: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function(req, res) {
    db.Stats
      .find({ player: "Tim"})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};