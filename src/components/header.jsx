import React from 'react';
import './header.css';
import {useState} from 'react';

export default function Header(props) {
     const [search, setSearch] = useState("");
     const [open, setOpen] = useState([]);
    return(
        <div className="Header__Block">
            <h1 className="Header__Title">Stocks Dashboard</h1>
            <input className="Header__Search" value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={() => fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=90DCTUW9U71JIZB4")
  .then(response => response.json())
  .then(data => {
      const openArr = [];
      for (let week in data["Time Series (Daily)"]) {
          openArr.push(data["Time Series (Daily)"][week]["1. open"])
      }
      setOpen(openArr);
      })}>Search!</button>
        </div>
    )
}