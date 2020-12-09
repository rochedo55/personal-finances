const { v4 } = require('uuid');
const db = require('../database/connection');


exports.list = function(req, res) {
    const { currentMonth=false } = req.query;

    const expenses = db.get('expenses').value();

    if (currentMonth == "true") {
        const today = new Date();

        const expensesCurrentMonth = expenses.filter(expense => {
            let dbDate = new Date(expense.date);
            return dbDate.getMonth() == today.getMonth() && dbDate.getFullYear() == today.getFullYear()
        });

        res.json(expensesCurrentMonth);
    }

    res.json(expenses);
}

exports.create = function(req, res) {
    const { title, value, date } = req.body;
    
    const parsedDate = new Date(date);

    db
        .get("expenses")
        .push({ 
            title, 
            value: Number(value), 
            id: v4(),
            date: parsedDate
        })
        .write();

    const expenses = db.get('expenses').value();

    res.json(expenses);
}