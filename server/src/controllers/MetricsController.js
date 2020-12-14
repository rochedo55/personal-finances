const db = require('../database/connection');

exports.index = function (req, res) {
    const revenues = db.get("revenues").value();
    const expenses = db.get("expenses").value();

    const today = new Date();

    const revenuesCurrentMonth = revenues.filter(revenue => {
        let dbDate = new Date(revenue.date);
        return dbDate.getMonth() == today.getMonth() && dbDate.getFullYear() == today.getFullYear()
    });
    
    const expensesCurrentMonth = expenses.filter(expense => {
        let dbDate = new Date(expense.date);
        return dbDate.getMonth() == today.getMonth() && dbDate.getFullYear() == today.getFullYear()
    });

    const revenuesCurrentMonthSum = revenuesCurrentMonth.reduce((accumulator, revenue) => accumulator + revenue.value, 0);
    const expensesCurrentMonthSum = expensesCurrentMonth.reduce((accumulator, expense) => accumulator + expense.value, 0);

    const currentMoney = revenuesCurrentMonthSum - expensesCurrentMonthSum;

    const revenuesSum = revenues.reduce((accumulator, revenue) => accumulator + revenue.value, 0);
    const expensesSum = expenses.reduce((accumulator, expense) => accumulator + expense.value, 0);

    const balance = revenuesSum - expensesSum;

    res.json({
        revenuesCurrentMonthSum, 
        expensesCurrentMonthSum, 
        currentMoney, 
        balance 
    });
}