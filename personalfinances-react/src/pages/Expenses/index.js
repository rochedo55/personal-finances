import React, { useState, useEffect } from 'react';

import { FaPlus } from "react-icons/fa";

import { Line } from 'react-chartjs-2';

import AddExpenseModal from '../../components/AddExpenseModal';

import api from '../../services/api';

import { formatDateToHuman } from '../../utils/Dateutils';
import { groupTransactionsByDate } from '../../utils/TransactionsUtils';

import './style.css';

function Expenses() {
    
    const [addExpenseModalVisible, setAddExpenseModalVisible] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [expensesByDay, setExpensesByDay] = useState([]);

    function handleOpenAddExpenseModal() {
        setAddExpenseModalVisible(true);
    }

    function getExpenses() {
        api
            .get('expenses/')
            .then((result) => {
                setExpenses(result.data);
            })
            .catch((error) => {
                alert("Ops! Algo deu errado. Não foi possível recuperar as despesas. Por favor tente novamente");
            })
    }

    useEffect(() => {
        getExpenses();
    }, []);

    useEffect(() => {
        let expensesByDateTemp = groupTransactionsByDate(expenses);

        setExpensesByDay(expensesByDateTemp);
    }, [expenses]);


    return (
        <>
            <div className="inner">
                <div className="card">
                    <h2 className="card-title expense-title">Despesas</h2>
                    
                    <div id="expenses-chart">
                        <Line 
                            data={{
                                options: {
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                },
                                labels: expensesByDay.map((expense) => expense[0]),
                                datasets: [{
                                    datasetKeyProvider: 'expensesDataSet',
                                    label: 'Despesas por data',
                                    data: expensesByDay.map((expense) => expense[1]),
                                    fill: true,
                                    borderColor: "rgb(255, 99, 132)",
                                    backgroundColor: "rgb(255, 99, 132)"
                                }]
                            }}
                        />
                    </div>

                    <table className="expenses-list">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Despesa</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                expenses.map((expense, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="expense-item-date">{formatDateToHuman(expense.date)}</td>
                                            <td className="expense-item-name">{expense.title}</td>
                                            <td className="expense-item-value">R$ {expense.value}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <button className="add-transaction expense" onClick={handleOpenAddExpenseModal}>
                <FaPlus size={18} color="#FFF" />
            </button>

            <AddExpenseModal 
                visible={addExpenseModalVisible}
                setVisible={setAddExpenseModalVisible}
                addExpenseCallback={getExpenses}
            />
        </>
    );
}

export default Expenses;