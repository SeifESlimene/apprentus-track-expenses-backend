// Import Express Library
const express = require("express");
// Import Our Controllers
const expenses = require("../controllers/getExpenses");
const addExpense = require("../controllers/addExpense");
const editExpense = require("../controllers/editExpense");
const deleteExpense = require("../controllers/deleteExpense");

// Initilize Our Router
const router = express.Router();
// Initilize getExpenses and getExpensesByMonth
const { getExpenses, getExpensesByMonth } = expenses;

// Get Expenses Endpoint
router.get("/expenses", getExpenses);
// Get Expenses By Month And Year
router.get("/expenses/:year/:month", getExpensesByMonth);
// Add Expense Route
router.post("/expenses/add", addExpense);
// Add Expense Route
router.post("/expenses/edit/:id", editExpense);
// Add Expense Route
router.post("/expenses/delete/:id", deleteExpense);

// Export Our Router
module.exports = router;
