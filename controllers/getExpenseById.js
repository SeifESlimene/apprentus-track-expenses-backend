// Import Our ExpenseModel
const ExpenseModal = require("../models/expense.model.js");

// Get Expenses
getExpensesById = (req, res) => {
  // Get all documents
  console.log(req.params.id);
  ExpenseModal.find({
    _id: req.params.id,
  }).exec((err, data) => {
    console.log(data);
    if (err) {
      res.status(400).send(`There Is An Error ${err}`);
    } else {
      res.end(JSON.stringify(data));
    }
  });
};

module.exports = getExpensesById;
