<script>
    import api from './services/api';
    
    export let addExpenseCallback;
    export let setVisible;
    export let isVisible;

    let title;
    let value;
    let date;

    function addExpense(e) {
        e.preventDefault();

        if (title === '' || !value || date === '') {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (value < 0) {
            alert("Valor da despesa inválido");
            return;
        }

        api
            .post('expenses/', {
                title,
                date,
                value
            })
            .then(() => {
                addExpenseCallback();
                setVisible(false);
                title = '';
                value = '';
                date = '';
            })
            .catch(() => {
                alert("Ops! Algo deu errado. Não foi possível salvar despesa. Por favor tente novamente");
            });
    }
</script>

<div id="modalAddExpense" class="modal" class:show={isVisible}>
    <div class="modal-content expense">
        <div class="modal-header">
            <h2>Adicionar Despesa</h2>
            <span class="close" on:click={() => setVisible(false)}>&times;</span>
        </div>
        <form on:submit={addExpense}>
            <div class="modal-body">
                <div class="form-group">
                    <p>Adicionar o titulo da despesa</p>
                    <input 
                        type="text" 
                        id="titleExpense" 
                        placeholder="Titulo..." 
                        bind:value={title}
                    />
                </div>
                <div class="form-group">
                    <p>Adicione o valor da despesa</p>
                    <input 
                        type="number" 
                        id="valueExpense" 
                        placeholder="Valor..." 
                        bind:value={value}
                    />
                </div>
                <div className="form-group">
                    <p>Adicione a data da despesa</p>
                    <input 
                        type="date" 
                        id="dateReceita" 
                        placeholder="18/11/2020"
                        bind:value={date}
                    />
                </div>
            </div>
            <div class="modal-footer">
                <button class="add" id="btnAddExpense">Adicionar</button>
            </div>
        </form>
    </div>
</div>

<style>
/*****************************************************************
 * CSS Modal
*****************************************************************/
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal.show {
    display: flex;
}

/* Modal Content/Box */
.modal-content {
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    position: relative;
    background-color: #fefefe;
    padding: 0;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}


.modal-content.expense {
    border: 3px solid #f24331;
} 

.modal-content.expense button.add {
    background-color: #f24331;
}

.modal-content .modal-header {
    padding: 5px 16px;
    border-bottom: 1px solid rgba(0,0,0,0.120);
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.modal-content .modal-body {
    padding: 2px 16px;
}
.modal-content .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal-content .form-group {
    margin: 10px 0;;
}

input {
    display: flex;
    color: #0176bc;
    margin: 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    width: calc(100% - 25px);
}


.modal-content .modal-footer button {
    padding: 5px 15px;
    border-radius: 4px;
    margin: 10px 0;
    color: #fff;
    font-size: 14px;
}
</style>