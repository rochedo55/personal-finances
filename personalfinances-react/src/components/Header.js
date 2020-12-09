import React from 'react';
import logo from '../assets/logo2.png';

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
        </div>
    );
}