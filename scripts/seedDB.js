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
    wins: 10,
    losses: 16,
  },
  {
    player: "Alexa",
    faction: "Xenos",
    sub: "Aeldari",
    wins: 17,
    losses: 5,
  },
  {
    player: "John",
    faction: "Imperium",
    sub: "Ultramarines",
    wins: 20,
    losses: 4,
  },
  {
    player: "Asa",
    faction: "Xenos",
    sub: "Tau",
    wins: 15,
    losses: 7,
  },
  {
    player: "Tim",
    faction: "Xenos",
    sub: "Necrons",
    wins: 14,
    losses: 7,
  },
  {
    player: "Asa",
    faction: "Imperium",
    sub: "Astra Militarum",
    wins: 6,
    losses: 4,
  }
];

db.Stats
  .remove({})
  .then(() => db.Stats.collection.insertMany(statsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });