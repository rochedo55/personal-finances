<template>
    <div>
        <div class="row">
            <MiniCard title="Saldo Atual" :value="revenueSum - expenseSum" type="balance" icon="landmark" />
            <MiniCard title="Receitas" :value="revenueSum" type="revenue" icon="hand-holding-usd" />
            <MiniCard title="Despesas" :value="expenseSum" type="expense" icon="receipt" />
            <MiniCard title="Balanço" :value="balance" type="profit" icon="piggy-bank" />
        </div>
        <div class="row">
            <div class="card">
                <label class="card-title">Despesas do mês</label>
                <div>
                    <line-chart v-if="loadedApiData" :chartData="chartDataExpense" />
                </div>
            </div>
            <div class="card">
                <label class="card-title">Receitas do mês</label>
                <div>
                    <line-chart v-if="loadedApiData" :chartData="chartDataRevenue" />
                </div>
            </div>
        </div>
        <button class="add-transaction" v-on:click="setTransacOptionsVisible">
            <font-awesome-icon icon="plus" :style="{ color: '#FFF', fontSize:'18px' }"/>
        </button>
        <ButtonAddTransac 
            class="add-revenue" 
            :classVisible="classTransacOptionsVisible" 
            iconName="hand-holding-usd" 
            v-on:onclick="setRevenueModalVisible(true)" 
        />
        <ButtonAddTransac 
            class="add-expense" 
            :classVisible="classTransacOptionsVisible" 
            iconName="receipt" 
            v-on:onclick="setExpenseModalVisible(true)" 
        />
        <AddExpenseModal 
            :classVisible="expenseModalVisible" 
            v-on:addExpenseCallback="getTransactions" 
            v-on:setExpenseModalVisible="setExpenseModalVisible" 
        />
        <AddRevenueModal
            :classVisible="revenueModalVisible"
            v-on:addRevenueCallback="getTransactions"
            v-on:setRevenueModalVisible="setRevenueModalVisible"
        />
    </div>
</template>

<script>
import LineChart from './LineChart';
import MiniCard from './MiniCard.vue'
import ButtonAddTransac from './ButtonAddTransac'
import AddExpenseModal from './AddExpenseModal'
import AddRevenueModal from './AddRevenueModal'

import api from '../services/api';

import { groupTransactionsByDate } from '../utils/TransactionsUtils'

export default {
    components: {
        MiniCard,
        ButtonAddTransac,
        AddExpenseModal,
        AddRevenueModal,
        LineChart
    },
    data: function() {
        return {
            showTransacOptions: false,
            hideTransacOptions: false,
            classTransacOptionsVisible: '',
            expenseModalVisible: false,
            revenueModalVisible: false,
            revenueSum: 0,
            expenseSum: 0,
            balance: 0,
            currentMoney: 0,
            expensesCurrentMonth: [],
            revenuesCurrentMonth: [],
            chartDataRevenue: {},
            chartDataExpense: {},
            loadedApiData: false
        }
    },
    methods: {
        setTransacOptionsVisible: function() {
            if (this.classTransacOptionsVisible === '' || this.classTransacOptionsVisible === 'hide') {
                this.classTransacOptionsVisible = 'show';
            } else {
                this.classTransacOptionsVisible = 'hide';
            }
        },
        addRevenue: function(value) {
            this.revenueSum += value;
        },
        addExpense: function(value) {
            this.expenseSum += value;
        },
        setExpenseModalVisible: function(isVisible) {
            this.expenseModalVisible = isVisible;
        },
        setRevenueModalVisible: function(isVisible) {
            this.revenueModalVisible = isVisible;
        },
        getTransactions: function() {
            this.loadedApiData = false;

            Promise
                .all([
                    api.get("/metrics"), 
                    api.get("/expenses/?currentMonth=true"),
                    api.get("/revenues/?currentMonth=true")
                ])
                .then(results => {
                    const metrics = results[0].data;

                    this.balance = metrics.balance;
                    this.currentMoney = metrics.currentMoney;
                    this.expenseSum = metrics.expensesCurrentMonthSum;
                    this.revenueSum = metrics.revenuesCurrentMonthSum;

                    this.expensesCurrentMonth = groupTransactionsByDate(results[1].data);
                    this.revenuesCurrentMonth = groupTransactionsByDate(results[2].data);

                    this.chartDataRevenue = {
                        labels: this.revenuesCurrentMonth.map(revenue => revenue[0]),
                        datasets: [{
                            label: "Despesas por data",
                            fill: true,
                            data: this.revenuesCurrentMonth.map(revenue => revenue[1]),
                            borderColor: "rgb(50, 168, 82)",
                            backgroundColor: "rgb(50, 168, 82)"
                        }]
                    }
                    
                    this.chartDataExpense = {
                        labels: this.expensesCurrentMonth.map(expense => expense[0]),
                        datasets: [{
                            label: "Despesas por data",
                            fill: true,
                            data: this.expensesCurrentMonth.map(expense => expense[1]),
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgb(255, 99, 132)"
                        }]
                    }

                    this.loadedApiData = true;
                })
                .catch(function(error) {
                    console.log(error)
                    alert("Ops! Algo deu errado. Não foi possível recuperar as transações. Por favor tente novamente")
                });
        }
    },
    mounted: function() {
        this.getTransactions();
    }
}
</script>

<style>
    .card{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex: 1;
        margin: 10px;
        min-width: 45%;
        border-radius: 15px;
        background-color: #ffffff;
        padding: 10px;
    }

    .card .card-title {
        font-weight: bold;
        font-size: 14px;
    }

    .add-transaction {
        position: absolute;
        right: 10px;
        bottom: 30px;
        background-color: #2061bd;
        /* padding: 17px 18px; */
        border-radius: 50%;
        color: #FFF;
        font-size: 14px;
        cursor: pointer;
        width: 50px;
        height: 50px;
    }
</style>