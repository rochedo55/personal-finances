import React from 'react';
import { FaReceipt, FaHandHoldingUsd, FaHome } from "react-icons/fa";

export default function Sidemenu({ currentPage }) {
    return (
        <div className="sidemenu">
            <ul className="sidemenu-options">
                <li className={`item ${currentPage === "home" ? "active": ""}`}>
                    <a href="/">
                        <FaHome color={currentPage === "home" ? "#334ca5" : "#ccc"} size={18}/>
                        Home
                    </a>
                </li>
                <li className={`item ${currentPage === "expense" ? "active": ""}`}>
                    <a href="/">
                        <FaReceipt color={currentPage === "expense" ? " #334ca5" : "#ccc"} size={18}/>
                        Despesas
                    </a>
                </li>
                <li className={`item ${currentPage === "revenue" ? "active": ""}`}>
                    <a href="/">
                        <FaHandHoldingUsd color={currentPage === "revenue" ? " #334ca5" : "#ccc"} size={18}/>
                        Receitas
                    </a>
                </li>
            </ul>
        </div>
    );
}