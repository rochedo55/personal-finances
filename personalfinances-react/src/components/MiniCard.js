import React from 'react';

export default function MiniCard({ title, value, type, icon }) {
    return (
        <div className={`mini-card ${type}`}>
            <div className="mini-card-icon-container">
                {icon}
            </div>
            <div className="mini-card-body">
                <label className="mini-card-title">{title}</label>
                <span>R$ {value}</span>
            </div>                    
        </div>
    );
}