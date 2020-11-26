<template>
    <div v-bind:class="classVisible" id="modalAddExpense" class="modal"  >
        <div class="modal-content expense">
            <div class="modal-header">
                <h2>Adicionar Despesa</h2>
                <span class="close" v-on:click="close">&times;</span>
            </div>
            <form @submit.prevent="AddExpense">
                <div class="modal-body">
                    <div class="form-group">
                        <p>Adicionar o titulo da despesa</p>
                        <input 
                            type="text" 
                            id="titleExpense" 
                            v-model="expenseTitle"
                            placeholder="Titulo..." 
                            onChange={}
                        />
                    </div>
                    <div class="form-group">
                        <p>Adicione o valor da despesa</p>
                        <input 
                            type="number" 
                            id="valueExpense" 
                            :value="expenseValue"
                            :placeholder="Valor"
                            @change="$emit('update:modelValue', $event.target.value)"
                             
                        />
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="add" id="btnAddExpense">Adicionar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'classVisible'],
    data() {
        return {
            expenseTitle : '',
            expenseValue : '' ,
            showModal : false
        }
    },
    methods: {
        onclick(){
            
        },
        close(){
            this.showModal = false
        },
        AddExpense(){
            
        }

    }

}
</script>

<style>

</style>