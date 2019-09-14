const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerStats = new Schema({
  player: { type: String, required: true },
  faction: { type: String, required: true },
  sub: { type: String, required: true },
  victory: {type: Boolean, required: false},
  wins: {type: Number, required: false},
  loses: {type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const Stats = mongoose.model("Stats", playerStats);

module.exports = Stats;