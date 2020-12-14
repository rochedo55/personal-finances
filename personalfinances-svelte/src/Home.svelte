<script>
    import { onMount } from 'svelte';

    import Icon from 'fa-svelte';
    import { 
        faLandmark, 
        faReceipt, 
        faHandHoldingUsd, 
        faPiggyBank, 
        faPlus 
     } from '@fortawesome/free-solid-svg-icons';

    import Chart from 'chart';
    import Line from "svelte-chartjs/src/Line.svelte";

    import MiniCard from './MiniCard.svelte';
    import ButtonAddTransac from './ButtonAddTransac.svelte';
    import AddExpenseModal from './AddExpenseModal.svelte';
    import AddRevenueModal from './AddRevenueModal.svelte';

    import api from './services/api';

    import { groupTransactionsByDate } from './utils/TransactionsUtils';
    
    let classTransacOptionsVisible = '';
    let revenueSum = 0;
    let expenseSum = 0;
    let expenseModalVisible = false;
    let revenueModalVisible = false;

    let balance = 0;
    let currentMoney = 0;
    let expensesCurrentMonth = [];
    let revenuesCurrentMonth = [];
    let chartDataRevenue = {};
    let chartDataExpense = {};
    let loadedApiData = false;

    let commonChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    
    function setTransacOptionsVisible() {
        if (classTransacOptionsVisible === '' || classTransacOptionsVisible === 'hide') {
            classTransacOptionsVisible = 'show';
        } else {
            classTransacOptionsVisible = 'hide';
        }
    }

    function setExpenseModalVisible(isVisible) {
        expenseModalVisible = isVisible;
    }

    function setRevenueModalVisible(isVisible) {
        revenueModalVisible = isVisible;
    }


    function getTransactions() {
        loadedApiData = false;

        Promise
            .all([
                api.get("/metrics"), 
                api.get("/expenses/?currentMonth=true"),
                api.get("/revenues/?currentMonth=true")
            ])
            .then(results => {
                const metrics = results[0].data;

                balance = metrics.balance;
                currentMoney = metrics.currentMoney;
                expenseSum = metrics.expensesCurrentMonthSum;
                revenueSum = metrics.revenuesCurrentMonthSum;

                expensesCurrentMonth = groupTransactionsByDate(results[1].data);
                revenuesCurrentMonth = groupTransactionsByDate(results[2].data);

                chartDataRevenue = {
                        labels: revenuesCurrentMonth.map(revenue => revenue[0]),
                        datasets: [{
                            label: "Despesas por data",
                            fill: true,
                            data: revenuesCurrentMonth.map(revenue => revenue[1]),
                            borderColor: "rgb(50, 168, 82)",
                            backgroundColor: "rgb(50, 168, 82)"
                        }]
                }
                
                chartDataExpense = {
                        labels: expensesCurrentMonth.map(expense => expense[0]),
                        datasets: [{
                            label: "Despesas por data",
                            fill: true,
                            data: expensesCurrentMonth.map(expense => expense[1]),
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgb(255, 99, 132)"
                        }]
                }
            })
            .catch(function(error) {
                console.log(error)
                alert("Ops! Algo deu errado. Não foi possível recuperar as transações. Por favor tente novamente")
            });
    }

    
    onMount(getTransactions);
</script>


<div>
    <div class="row">
        <MiniCard title="Saldo Atual" value="{currentMoney}" type="balance" icon={faLandmark} />
        <MiniCard title="Receitas" value="{revenueSum}" type="revenue" icon={faHandHoldingUsd} />
        <MiniCard title="Despesas" value="{expenseSum}" type="expense" icon={faReceipt} />
        <MiniCard title="Balanço" value="{balance}" type="profit" icon={faPiggyBank} />
    </div>
    <div class="row">
        <div class="card">
            <label for="" class="card-title">Despesas do mês</label>
            <div>
                <Line 
                    data={chartDataExpense}
                    options={commonChartOptions}
                    height={400}
                />
            </div>
        </div>
        <div class="card">
            <label for="" class="card-title">Receitas do mês</label>
            <div>
                <Line 
                    data={chartDataRevenue}
                    options={commonChartOptions}
                    height={400}
                />
            </div>
        </div>
    </div>
    <button class="add-transaction" on:click={setTransacOptionsVisible}>
        <Icon icon={faPlus} />
    </button>
    <ButtonAddTransac
        classType="revenue" 
        classVisible="{classTransacOptionsVisible}" 
        icon={faReceipt} 
        onclickFunction={() => setRevenueModalVisible(true)} 
    />
    <ButtonAddTransac 
        classType="expense" 
        classVisible="{classTransacOptionsVisible}" 
        icon={faHandHoldingUsd} 
        onclickFunction={() => setExpenseModalVisible(true)}
    />
    <AddExpenseModal 
        isVisible={expenseModalVisible}
        setVisible={setExpenseModalVisible}
        addExpenseCallback={getTransactions}
    />
    <AddRevenueModal
        isVisible={revenueModalVisible}
        setVisible={setRevenueModalVisible}
        addRevenueCallback={getTransactions}
    />
</div>


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
        position: fixed;
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