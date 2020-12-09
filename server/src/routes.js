const express = require("express");
const ExpenseController = require('./controllers/ExpenseController');
const RevenueController = require('./controllers/RevenueController');
const MetricsController = require('./controllers/MetricsController');

const router = express.Router();

router.route("/metrics/")
    .get(MetricsController.index);

router.route('/expenses/')
    .get(ExpenseController.list)
    .post(ExpenseController.create);

router.route('/revenues/')
    .get(RevenueController.list)
    .post(RevenueController.create);


module.exports = router;