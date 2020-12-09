import React, { useState, useEffect } from 'react';

import { FaPlus } from "react-icons/fa";

import { Line } from 'react-chartjs-2';

import AddRevenueModal from '../../components/AddRevenueModal';

import api from '../../services/api';

import { formatDateToHuman } from '../../utils/Dateutils';
import { groupTransactionsByDate } from '../../utils/TransactionsUtils';

import './style.css';


function Revenues() {
    const [addRevenueModalVisible, setAddRevenueModalVisible] = useState(false);
    const [revenues, setRevenues] = useState([]);
    const [revenuesByDay, setRevenuesByDay] = useState([]);

    function handleOpenAddRevenueModal() {
        setAddRevenueModalVisible(true);
    }

    function getRevenues() {
        api
            .get("revenues/")
            .then(function(result) {
                setRevenues(result.data);
            })
            .catch(function(error) {
                alert("Ops! Algo deu errado. Não foi possível recuperar as receitas. Por favor tente novamente");
            })
    }

    useEffect(() => {
        getRevenues();
    }, []);

    useEffect(() => {
        let revenuesByDayTemp = groupTransactionsByDate(revenues);

        setRevenuesByDay(revenuesByDayTemp);
    }, [revenues])

    return (
        <>
            <div className="inner">
                <div className="card">
                    <h2 className="card-title revenue-title">Receitas</h2>
                    
                    <div id="revenues-chart">
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
                                labels: revenuesByDay.map((revenue) => revenue[0]),
                                datasets: [{
                                    datasetKeyProvider: 'revenuesDataSet',
                                    label: 'Receitas por data',
                                    data: revenuesByDay.map((revenue) => revenue[1]),
                                    fill: true,
                                    borderColor: "rgb(50, 168, 82)",
                                    backgroundColor: "rgb(50, 168, 82)"
                                }]
                            }}
                        />
                    </div>

                    <table className="revenue-list">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Receita</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                revenues.map((revenue, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="revenue-item-date">{formatDateToHuman(revenue.date)}</td>
                                            <td className="revenue-item-name">{revenue.title}</td>
                                            <td className="revenue-item-value">R$ {revenue.value}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <button className="add-transaction revenue" onClick={handleOpenAddRevenueModal}>
                    <FaPlus size={18} color="#FFF" />
                </button>

                <AddRevenueModal 
                    visible={addRevenueModalVisible}
                    setVisible={setAddRevenueModalVisible}
                    addRevenueCallback={getRevenues}
                />
            </div>
        </>
    );
}

export default Revenues;