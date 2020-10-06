<template>
    <div>
        <div class="row">
            <MiniCard title="Saldo Atual" value="123.00" type="balance" icon="home" />
            <MiniCard title="Receitas" value="123" type="revenue" icon="hand-holding-usd" />
            <MiniCard title="Despesas" value="123" type="expense" icon="receipt" />
            <MiniCard title="Balanço" value="123" type="profit" icon="piggy-bank" />
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
        <button class="add-revenue" v-bind:class="{show: showTransacOptions, hide: hideTransacOptions }">
            <font-awesome-icon icon="hand-holding-usd" :style="{ color: '#FFF', fontSize:'16px' }"/>
        </button>
        <button class="add-expense" v-bind:class="{show: showTransacOptions, hide: hideTransacOptions }">
            <font-awesome-icon icon="receipt" :style="{ color: '#FFF', fontSize:'16px' }"/>
        </button>
    </div>
</template>

<script>
import MiniCard from './MiniCard.vue'

export default {
  components: {
    MiniCard
  },
  data: function() {
      return {
          showTransacOptions: false,
          hideTransacOptions: false
      }
  },
  methods: {
      setTransacOptionsVisible: function() {
          this.hideTransacOptions = this.showTransacOptions;
          this.showTransacOptions = !this.showTransacOptions;
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

    .add-expense {
        position: absolute;
        /* padding: 15px 17px; */
        border-radius: 50%;
        color: #FFF;
        font-size: 13px;
        cursor: pointer;
        background-color: #f24331;
        width: 40px;
        height: 40px;
        right: 16px;
        bottom: 30px;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .add-expense.show {
        animation: showAddExpense .5s ease-in-out;
        bottom: 135px;
        opacity: 1;
        pointer-events: all;
    }

    .add-expense.hide {
        animation: hideAddExpense .4s ease;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        bottom: 30px;
    }

    .add-revenue {
        position: absolute;
        /* padding: 14px 15px; */
        border-radius: 50%;
        color: #FFF;
        font-size: 13px;
        cursor: pointer;
        background-color: #4cae51;
        opacity: 0;
        right: 16px;
        bottom: 30px;
        pointer-events: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
    }

    .add-revenue.show {
        animation: showAddRevenue .5s;
        bottom: 90px;
        opacity: 1;
        pointer-events: all;
    }
    .add-revenue.hide {
        animation: hideAddRevenue .4s ease;
        opacity: 0;
        bottom: 30px;
        pointer-events: none;
        cursor: pointer;
    }

    @keyframes showAddExpense {
        from {
            bottom: 30px;
            opacity: 0;
        }
        to {
            bottom: 135px;
            opacity: 1;
        }
    }
    @keyframes hideAddExpense {
        from {
            bottom: 135px;
            opacity: 1;
        }
        to {
            bottom: 30px;
            opacity: 0;
        }
    }

    @keyframes showAddRevenue {
        from {
            bottom: 30px;
            opacity: 0;
        }
        to {
            bottom: 90px;
            opacity: 1;
        }
    }
    @keyframes hideAddRevenue {
        from {
            bottom: 90px;
            opacity: 1;
        }
        to {
            bottom: 30px;
            opacity: 0;
        }
    }
</style>