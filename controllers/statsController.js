const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Stats
      .find(req.query)
      .sort({ wins: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  find: function() {
    db.Stats
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};