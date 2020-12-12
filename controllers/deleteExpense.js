// Import Our ExpenseModel
const ExpenseModal = require("../models/expense.model.js");

// Add Expense
const deleteExpense = (req, res) => {
  const { id } = req.params;
  const expense = new ExpenseModal({
    name,
    date,
    description,
    amount,
    approved,
  });

  // Save our Document and Handling Error
  expense.save((err) => {
    if (err) {
      console.log("There is an error while saving!");
    } else {
      res.json(req.body);
    }
  });
};

module.exports = deleteExpense;
