import React, { useState } from 'react';

import { FaLandmark, FaHandHoldingUsd, FaReceipt, FaPiggyBank, FaPlus } from "react-icons/fa";

import './style.css';

import Header from '../../components/Header';
import Sidemenu from '../../components/Sidemenu';
import MiniCard from '../../components/MiniCard';

export default function Home() {

    const [showTransacOptions, setShowTransacOptions] = useState(false);
    const [hideTransacOptions, setHideTransacOptions] = useState(false);

    function setTransacOptionsVisible() {
        setHideTransacOptions(showTransacOptions);
        setShowTransacOptions(!showTransacOptions);
    }

    return (
        <div className="container">
            <Header />
            <div className="inner">
                <div className="row">
                    <MiniCard title="Saldo Atual" value="123.00" type="balance" icon={<FaLandmark color="#fff" size={18} />} />
                    <MiniCard title="Receitas" value="123" type="revenue" icon={<FaHandHoldingUsd color="#fff" size={24} />} />
                    <MiniCard title="Despesas" value="123" type="expense" icon={<FaReceipt color="#fff" size={18} />} />
                    <MiniCard title="Balanço" value="123" type="profit" icon={<FaPiggyBank color="#fff" size={20} />} />
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
                <button className={`add-revenue ${showTransacOptions ? "show" : hideTransacOptions ? "hide": ""}`}>
                    <FaHandHoldingUsd color="#fff" size={19} />
                </button>
                <button className={`add-expense ${showTransacOptions ? "show" : hideTransacOptions ? "hide": ""}`}>
                    <FaReceipt color="#fff" size={16} />
                </button>
            </div>
            <Sidemenu currentPage="home" />
        </div>
    );
}