import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

import { FaLandmark, FaHandHoldingUsd, FaReceipt, FaPiggyBank, FaPlus } from "react-icons/fa";

import './style.css';

import MiniCard from '../../components/MiniCard';
import ButtonAddTransac from '../../components/ButtonAddTransac';
import AddExpenseModal from '../../components/AddExpenseModal';
import AddRevenueModal from '../../components/AddRevenueModal';

import api from '../../services/api';

import { groupTransactionsByDate } from '../../utils/TransactionsUtils';

export default function Home() {
    
    const [addExpenseModalVisible, setAddExpenseModalVisible] = useState(false);
    const [addRevenueModalVisible, setAddRevenueModalVisible] = useState(false);
    const [classTransacOptionsVisible, setClassTransacOptionsVisible] = useState('');
    const [revenueSum, setRevenueSum] = useState(0);
    const [expenseSum, setExpenseSum] = useState(0);
    const [balance, setBalance] = useState(0);
    const [currentMoney, setCurrentMoney] = useState(0);
    const [expensesCurrentMonth, setExpenseCurrentMonth] = useState([]);
    const [revenuesCurrentMonth, setRevenuesCurrentMonth] = useState([]);
    const [expensesByDate, setExpensesByDate] = useState([]);
    const [revenuesByDate, setRevenuesByDate] = useState([]);

    function setTransacOptionsVisible() {
        if (classTransacOptionsVisible === '' || classTransacOptionsVisible === 'hide') {
            setClassTransacOptionsVisible('show');
        } else {
            setClassTransacOptionsVisible('hide');
        }
    }

    function getMetrics() {
        Promise
            .all([
                api.get("/metrics"), 
                api.get("/expenses/?currentMonth=true"),
                api.get("/revenues/?currentMonth=true")
            ])
            .then(function(results) {
                const metrics = results[0].data;
                setBalance(metrics.balance);
                setCurrentMoney(metrics.currentMoney);
                setExpenseSum(metrics.expensesCurrentMonthSum);
                setRevenueSum(metrics.revenuesCurrentMonthSum);
                setExpenseCurrentMonth(results[1].data);
                setRevenuesCurrentMonth(results[2].data);
            })
            .catch(function(error) {
                alert("Ops! Algo deu errado. Não foi possível recuperar as transações. Por favor tente novamente")
            });
    }

    useEffect(() => {
        getMetrics();
    }, []);

    useEffect(() => {
        let expensesByDateTemp = groupTransactionsByDate(expensesCurrentMonth);

        setExpensesByDate(expensesByDateTemp);
    }, [expensesCurrentMonth]);


    useEffect(() => {
        let revenuesByDateTemp = groupTransactionsByDate(revenuesCurrentMonth);

        setRevenuesByDate(revenuesByDateTemp);
    }, [revenuesCurrentMonth]);

    return (
        <div className="container">
            <div className="inner">
                <div className="row">
                    <MiniCard title="Saldo Atual" value={currentMoney} type="balance" icon={<FaLandmark color="#fff" size={18} />} />
                    <MiniCard title="Receitas" value={revenueSum} type="revenue" icon={<FaHandHoldingUsd color="#fff" size={24} />} />
                    <MiniCard title="Despesas" value={expenseSum} type="expense" icon={<FaReceipt color="#fff" size={18} />} />
                    <MiniCard title="Balanço" value={balance} type="profit" icon={<FaPiggyBank color="#fff" size={20} />} />
                </div>
                <div className="row">
                    <div className="card">
                        <label className="card-title">Despesas do mês</label>
                        <div>
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
                                    labels: expensesByDate.map((expense) => expense[0]),
                                    datasets: [{
                                        datasetKeyProvider: 'expenseCurrentMonthDataSet',
                                        label: 'Despesas por data',
                                        data: expensesByDate.map((expense) => expense[1]),
                                        fill: true,
                                        borderColor: "rgb(255, 99, 132)",
                                        backgroundColor: "rgb(255, 99, 132)"
                                    }]
                                }}
                            />
                        </div>
                    </div>
                    <div className="card">
                        <label className="card-title">Receitas do mês</label>
                        <div>
                            <Line 
                                data={{
                                    labels: revenuesByDate.map((revenue) => revenue[0]),
                                    datasets: [{
                                        datasetKeyProvider: 'revenueCurrentMonthDataSet',
                                        label: 'Receitas por data',
                                        data: revenuesByDate.map((revenue) => revenue[1]),
                                        fill: true,
                                        borderColor: "rgb(50, 168, 82)",
                                        backgroundColor: "rgb(50, 168, 82)"
                                    }],
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
                                }}
                            />
                        </div>
                    </div>
                </div>

                <button className="add-transaction" onClick={setTransacOptionsVisible}>
                    <FaPlus color="#fff" size={18} />
                </button>

                <ButtonAddTransac 
                    classType="revenue" 
                    classVisible={classTransacOptionsVisible} 
                    onclick={() => setAddRevenueModalVisible(true)}
                    icon={<FaHandHoldingUsd color="#fff" size={19} />} 
                />
                <ButtonAddTransac 
                    classType="expense" 
                    classVisible={classTransacOptionsVisible} 
                    onclick={() => setAddExpenseModalVisible(true)}
                    icon={<FaReceipt color="#fff" size={16} />} 
                />
            </div>

            <AddExpenseModal 
                visible={addExpenseModalVisible} 
                setVisible={setAddExpenseModalVisible}
                addExpenseCallback={getMetrics}
            />
            <AddRevenueModal 
                visible={addRevenueModalVisible} 
                setVisible={setAddRevenueModalVisible} 
                addRevenueCallback={getMetrics}
            />
        </div>
    );
}