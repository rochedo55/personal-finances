import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaReceipt, FaHandHoldingUsd, FaHome } from "react-icons/fa";

export default function Sidemenu() {
    const [routes] = useState([
        {
            "link": "/",
            "title": "Home",
            "icon": FaHome
        },
        {
            "link": "/expenses",
            "title": "Despesas",
            "icon": FaReceipt
        },
        {
            "link": "/revenues",
            "title": "Receitas",
            "icon": FaHandHoldingUsd
        }
    ]);
    const location = useLocation();

    return (
        <div className="sidemenu">
            <ul className="sidemenu-options">
                {
                    routes.map((route, index) => {
                        return (
                            <li className={`item ${location.pathname === route.link ? "active": ""}`} key={index}>
                                <Link to={route.link}>
                                    <route.icon color={location.pathname === route.link ? "#334ca5" : "#ccc"} size={18} />
                                    {route.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}