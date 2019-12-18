const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const balanceSchema = new Schema({
  email: { type: String, require: true },
  categoryName: String,
  spending: Number,
  description: String,
  date: { type: Date, default: Date.now }


});

const Balance = mongoose.model("Balance", balanceSchema);

module.exports = Balance;