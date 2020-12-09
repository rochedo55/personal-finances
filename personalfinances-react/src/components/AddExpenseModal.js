import React, { useState } from 'react';

import api from '../services/api';

export default function AddExpenseModal({ visible, setVisible, addExpenseCallback }) {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseValue, setExpenseValue] = useState(0);
    const [expenseDate, setExpenseDate] = useState("");
    
    function addExpense(event) {
        event.preventDefault();

        if (!expenseValue || expenseTitle.trim() === '' || expenseDate === "") {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (expenseValue < 0) {
            alert("Valor da receita inválido");
            return;
        }

        api
            .post("expenses/", {
                value: expenseValue,
                title: expenseTitle,
                date: expenseDate
            })
            .then(() => {
                setVisible(false);
                addExpenseCallback();
            })
            .catch((error) => {
                alert("Ops! Algo deu errado. Não foi possível salvar despesa. Por favor tente novamente");
            });
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
                                value={expenseValue}
                                onChange={(event) => setExpenseValue(event.target.value ? parseFloat(event.target.value) : "") } 
                            />
                        </div>
                        <div className="form-group">
                            <p>Adicione a data da despesa</p>
                            <input 
                                type="date" 
                                id="dateExpense" 
                                placeholder="" 
                                value={expenseDate}
                                onChange={(event) => setExpenseDate(event.target.value) } 
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