<script>
    import MiniCard from './MiniCard.svelte';
    import ButtonAddTransac from './ButtonAddTransac.svelte';
    import AddExpenseModal from './AddExpenseModal.svelte';
    import AddRevenueModal from './AddRevenueModal.svelte';

    import Icon from 'fa-svelte';
    import { faLandmark, faReceipt,faHandHoldingUsd, faPiggyBank, faPlus } from '@fortawesome/free-solid-svg-icons'
    
    let classTransacOptionsVisible = '';
    let revenueSum = 0;
    let expenseSum = 0;
    let expenseModalVisible = false;
    let revenueModalVisible = false;

    function setTransacOptionsVisible() {
        if (classTransacOptionsVisible === '' || classTransacOptionsVisible === 'hide') {
            classTransacOptionsVisible = 'show';
        } else {
            classTransacOptionsVisible = 'hide';
        }
    }

    function addRevenue(value) {
        revenueSum += value;
    }

    function addExpense(value) {
        expenseSum += value;
    }

    function setExpenseModalVisible(isVisible) {
        expenseModalVisible = isVisible;
    }

    function setRevenueModalVisible(isVisible) {
        revenueModalVisible = isVisible;
    }
</script>


<div>
    <div class="row">
        <MiniCard title="Saldo Atual" value="{revenueSum - expenseSum}" type="balance" icon={faLandmark} />
        <MiniCard title="Receitas" value="{revenueSum}" type="revenue" icon={faHandHoldingUsd} />
        <MiniCard title="Despesas" value="{expenseSum}" type="expense" icon={faReceipt} />
        <MiniCard title="Balanço" value="0" type="profit" icon={faPiggyBank} />
    </div>
    <div class="row">
        <div class="card">
            <label class="card-title">Despesas do mês</label>
        </div>
        <div class="card">
            <label class="card-title">Receitas do mês</label>
        </div>
        <div class="card">
            <label class="card-title">Receitas x Despesas dos últimos 6 meses</label>
        </div>
        <div class="card">
            <label class="card-title">Frequência de gastos</label>
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
        addExpenseCallback={addExpense}
    />
    <AddRevenueModal
        isVisible={revenueModalVisible}
        setVisible={setRevenueModalVisible}
        addRevenueCallback={addRevenue}
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