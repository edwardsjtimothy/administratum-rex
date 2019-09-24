const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactwarhammerstats"
);

const statsSeed = [
  {
    player: "Tim",
    faction: "Chaos",
    sub: "Thousand Sons",
    wins: 3,
    loses: 7,
  },
  {
    player: "Alexa",
    faction: "Aeldari",
    sub: "Ulthwe",
    wins: 7,
    loses: 3,
  },
  {
    player: "John",
    faction: "Imperium",
    sub: "Ultramarines",
    wins: 8,
    loses: 2,
  },
  {
    player: "Asa",
    faction: "Tau",
    sub: "Tau Sept",
    wins: 6,
    loses: 4,
  }
];

db.playerStats
  .remove({})
  .then(() => db.playerStats.collection.insertMany(statsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });