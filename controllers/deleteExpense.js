// Import Our ExpenseModel
const ExpenseModal = require("../models/expense.model.js");

// Add Expense
const deleteExpense = (req, res) => {
  const { id } = req.params;

  // Save our Document and Handling Error
  ExpenseModal.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log("There is an error while deleting!");
    } else {
      res.json({ message: "Deleted Successfuly" });
    }
  });
};

module.exports = deleteExpense;
