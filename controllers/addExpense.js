// Import Our ExpenseModel
const ExpenseModal = require("../models/expense.model.js");

// Add Expense
const add = (req, res) => {
  const { name, date, description, amount, approved } = req.body;

  const expense = new ExpenseModal({
    name,
    date,
    description,
    amount,
    approved,
  });
  console.log(expense);
  // Save our Document and Handling Error
  expense.save((err) => {
    if (err) {
      console.log("There is an error while saving!");
    } else {
      res.json(req.body);
    }
  });
};

module.exports = add;
