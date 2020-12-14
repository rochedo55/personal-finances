const { v4 } = require('uuid');

const db = require('../database/connection');


exports.list = function(req, res) {
    const { currentMonth } = req.query;

    const revenues = db.get('revenues').value();

    if (currentMonth == "true") {
        const today = new Date();

        const revenuesCurrentMonth = revenues.filter(revenue => {
            let dbDate = new Date(revenue.date);
            return dbDate.getMonth() == today.getMonth() && dbDate.getFullYear() == today.getFullYear()
        });

        res.json(revenuesCurrentMonth);
    } else {
        res.json(revenues);
    }    
}

exports.create = function(req, res) {
    const { title, value, date } = req.body;

    const parseDate = new Date(date);

    db
        .get("revenues")
        .push({
            title,
            value: Number(value),
            id: v4(),
            date: parseDate
        })
        .write();

    const revenues = db.get('revenues').value();

    res.json(revenues);
}