import React, { useState } from 'react';

import { FaLandmark, FaHandHoldingUsd, FaReceipt, FaPiggyBank, FaPlus } from "react-icons/fa";

import './style.css';

import Header from '../../components/Header';
import Sidemenu from '../../components/Sidemenu';
import MiniCard from '../../components/MiniCard';
import ButtonAddTransac from '../../components/ButtonAddTransac';

export default function Home() {

    const [classTransacOptionsVisible, setClassTransacOptionsVisible] = useState('');
    const [revenueSum, setRevenueSum] = useState(0);
    const [expenseSum, setExpenseSum] = useState(0);

    function setTransacOptionsVisible() {
        if (classTransacOptionsVisible === '' || classTransacOptionsVisible === 'hide') {
            setClassTransacOptionsVisible('show');
        } else {
            setClassTransacOptionsVisible('hide');
        }
    }

    function addRevenue() {
        setRevenueSum(revenueSum+1);
    }

    function addExpense() {
        setExpenseSum(expenseSum+1);
    }

    return (
        <div className="container">
            <Header />
            <div className="inner">
                <div className="row">
                    <MiniCard title="Saldo Atual" value={revenueSum - expenseSum} type="balance" icon={<FaLandmark color="#fff" size={18} />} />
                    <MiniCard title="Receitas" value={revenueSum} type="revenue" icon={<FaHandHoldingUsd color="#fff" size={24} />} />
                    <MiniCard title="Despesas" value={expenseSum} type="expense" icon={<FaReceipt color="#fff" size={18} />} />
                    <MiniCard title="Balanço" value="0" type="profit" icon={<FaPiggyBank color="#fff" size={20} />} />
                </div>
                <div className="row">
                    <div className="card">
                        <label className="card-title">Despesas do mês</label>
                    </div>
                    <div className="card">
                        <label className="card-title">Receitas do mês</label>
                    </div>
                    <div className="card">
                        <label className="card-title">Receitas x Despesas dos últimos 6 meses</label>
                    </div>
                    <div className="card">
                        <label className="card-title">Frequência de gastos</label>
                    </div>
                </div>

                <button className="add-transaction" onClick={setTransacOptionsVisible}>
                    <FaPlus color="#fff" size={18} />
                </button>
                <ButtonAddTransac 
                    classType="revenue" 
                    classVisible={classTransacOptionsVisible} 
                    onclick={addRevenue}
                    icon={<FaHandHoldingUsd color="#fff" size={19} />} 
                />
                <ButtonAddTransac 
                    classType="expense" 
                    classVisible={classTransacOptionsVisible} 
                    onclick={addExpense}
                    icon={<FaReceipt color="#fff" size={16} />} 
                />
            </div>
            <Sidemenu currentPage="home" />
        </div>
    );
}