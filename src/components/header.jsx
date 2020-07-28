import React from 'react';
import './header.css';

export default function Header(props) {
    return(
        <div className="Header__Block">
            <h1 className="Header__Title">Stocks Dashboard</h1>
            <input className="Header__Search"/>
        </div>
    )
}