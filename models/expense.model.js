// Import Mongoose Library
const mongoose = require("mongoose");
// Initilize Schema Variable
const { Schema } = mongoose;
// Create Our Expense Schema
const expenseSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true, min: 20 },
    amount: { type: Number, required: true, min: 0 },
    approved: { type: Number, required: true },
  },
  { timestamps: { createdAt: 'created_at' } }
);
// Create Our Model
const expenseModel = new mongoose.model('Expense', expenseSchema);

module.exports = expenseModel;