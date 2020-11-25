import React, { useState } from 'react';


export default function AddRevenueModal({ visible, setVisible, addRevenueCallback }) {
    const [revenueTitle, setRevenueTitle] = useState("");
    const [revenueValue, setRevenueValue] = useState(0);

    function addRevenue(event) {
        event.preventDefault();

        if (!revenueValue || revenueTitle.trim() === '') {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (revenueValue < 0) {
            alert("Valor da receita inválido");
            return;
        }

        setVisible(false);
        addRevenueCallback(revenueValue);
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
                                onChange={(event) => setRevenueValue(parseFloat(event.target.value))}
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