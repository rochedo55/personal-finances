<template>
    <div>
        <div class="row">
            <MiniCard title="Saldo Atual" :value="revenueSum - expenseSum" type="balance" icon="landmark" />
            <MiniCard title="Receitas" :value="revenueSum" type="revenue" icon="hand-holding-usd" />
            <MiniCard title="Despesas" :value="expenseSum" type="expense" icon="receipt" />
            <MiniCard title="Balanço" value="0" type="profit" icon="piggy-bank" />
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
        <button class="add-transaction" v-on:click="setTransacOptionsVisible">
            <font-awesome-icon icon="plus" :style="{ color: '#FFF', fontSize:'18px' }"/>
        </button>
        <ButtonAddTransac class="add-revenue" :classVisible="classTransacOptionsVisible" iconName="hand-holding-usd" v-on:onclick="addRevenue" />
        <ButtonAddTransac class="add-expense" :classVisible="classTransacOptionsVisible" iconName="receipt" v-on:onclick="addExpense" />
        <AddExpenseModal :classVisible="visible"/>
    </div>
</template>

<script>
import MiniCard from './MiniCard.vue'
import ButtonAddTransac from './ButtonAddTransac'
import AddExpenseModal from './AddExpenseModal'

export default {
  components: {
    MiniCard,
    ButtonAddTransac,
    AddExpenseModal
  },
  data: function() {
      return {
          showTransacOptions: false,
          hideTransacOptions: false,
          revenueSum: 0,
          expenseSum: 0,
          classTransacOptionsVisible: '',
          visible : 'flex'
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
      addRevenue: function() {
          this.revenueSum++;
      },
      addExpense: function() {
          <AddExpenseModal />
          this.expenseSum++;
      }
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