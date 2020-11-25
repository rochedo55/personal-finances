import React, { useState } from 'react';


export default function AddExpenseModal({ visible, setVisible, addExpenseCallback }) {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseValue, setExpenseValue] = useState(0);
    
    function addExpense(event) {
        event.preventDefault();

        if (!expenseValue || expenseTitle.trim() === '') {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (expenseValue < 0) {
            alert("Valor da receita inválido");
            return;
        }

        setVisible(false);
        addExpenseCallback(expenseValue);
    }

    return (
        <div id="modalAddExpense" className="modal" style={{ display: (visible ? 'flex' : 'none') }}>
            <div className="modal-content expense">
                <div className="modal-header">
                    <h2>Adicionar Despesa</h2>
                    <span className="close" onClick={() => setVisible(false)}>&times;</span>
                </div>
                <form onSubmit={addExpense}>
                    <div className="modal-body">
                        <div className="form-group">
                            <p>Adicionar o titulo da despesa</p>
                            <input 
                                type="text" 
                                id="titleExpense" 
                                placeholder="Titulo..." 
                                value={expenseTitle}
                                onChange={(event) => setExpenseTitle(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <p>Adicione o valor da despesa</p>
                            <input 
                                type="number" 
                                id="valueExpense" 
                                placeholder="Valor..." 
                                onChange={(event) => setExpenseValue(parseFloat(event.target.value)) } 
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="add" id="btnAddExpense">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}