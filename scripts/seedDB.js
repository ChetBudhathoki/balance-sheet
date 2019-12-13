const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/balanceit"
);

const balanceSeed = [];

db.Balance
.remove({})
.then(() => db.Balance.collection.insertMany(balanceSeed))
.then(data=> {
  console.log(data.result.n + "record inserrted!");
  process.exit(0);
})
.catch(err => {
  console.log(err);
  process.exit(1);
  
})
