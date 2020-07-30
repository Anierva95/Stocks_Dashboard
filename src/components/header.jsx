import React from 'react';
import './header.css';
import {useState} from 'react';

export default function Header(props) {
     const [search, setSearch] = useState("");
    return(
        <div className="Header__Block">
            <h1 className="Header__Title">Stocks Dashboard</h1>
            <input className="Header__Search" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
    )
}