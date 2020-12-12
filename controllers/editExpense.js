// Import Our ExpenseModel
const ExpenseModal = require("../models/expense.model.js");

// Add Expense
const editExpense = (req, res) => {
  const { id } = req.params;
  const { name, date, description, amount, approved } = req.body;
  console.log({ name, date, description, amount, approved });
  // Edit our Document and Handling Error
  ExpenseModal.update(
    { _id: id },
    { name, date, description, amount, approved }
  ).then((err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.end("Updated Successfuly");
    //   }
    res.end("Updated Data!");
  });
};

module.exports = editExpense;
