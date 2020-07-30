import React from 'react';
import './header.css';
import {useState} from 'react';

export default function Header(props) {
     const [search, setSearch] = useState("");
    return(
        <div className="Header__Block">
            <h1 className="Header__Title">Stocks Dashboard</h1>
            <input className="Header__Search" value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={() => fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo")
  .then(response => response.json())
  .then(data => {
      for (let week in data["Weekly Time Series"]) {
          console.log(week);
      }
      console.log(Object.keys(data["Weekly Time Series"]))
  })}>Search!</button>
        </div>
    )
}