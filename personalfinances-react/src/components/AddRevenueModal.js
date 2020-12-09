import React, { useState } from 'react';

import api from '../services/api';

export default function AddRevenueModal({ visible, setVisible, addRevenueCallback }) {
    const [revenueTitle, setRevenueTitle] = useState("");
    const [revenueValue, setRevenueValue] = useState(0);
    const [revenueDate, setRevenueDate] = useState("");

    function addRevenue(event) {
        event.preventDefault();

        if (!revenueValue || revenueTitle.trim() === '' || revenueDate === "") {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (revenueValue < 0) {
            alert("Valor da receita inválido");
            return;
        }

        api
            .post("revenues/", {
                title: revenueTitle,
                value: revenueValue,
                date: revenueDate
            })
            .then(() => {
                setVisible(false);
                addRevenueCallback();
            })
            .catch((error) => {
                alert("Ops! Algo deu errado. Não foi possível salvar receita. Por favor tente novamente");
            });
    }

    return (
        <div id="modalAddRevenue" className="modal" style={{ display: (visible ? 'flex' : 'none') }}>
            <div className="modal-content revenue">
                <div className="modal-header">
                    <h2>Adicionar Receita</h2>
                    <span className="close" onClick={() => setVisible(false)}>&times;</span>
                </div>
                <form onSubmit={addRevenue}>
                    <div className="modal-body">
                        <div className="form-group">
                            <p>Adicione o titulo da receita</p>
                            <input 
                                type="text" 
                                id="tituloReceita" 
                                placeholder="Titulo..." 
                                value={revenueTitle}
                                onChange={(event) => setRevenueTitle(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <p>Adicione o valor da receita</p>
                            <input 
                                type="number" 
                                id="valorReceita" 
                                placeholder="Valor..."
                                value={revenueValue}
                                onChange={(event) => setRevenueValue(event.target.value ? parseFloat(event.target.value) : "")}
                            />
                        </div>
                        <div className="form-group">
                            <p>Adicione a data da receita</p>
                            <input 
                                type="date" 
                                id="dateReceita" 
                                placeholder="18/11/2020"
                                value={revenueDate}
                                onChange={(event) => setRevenueDate(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="add" id="btnAddReceita">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}