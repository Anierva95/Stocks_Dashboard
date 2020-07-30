import React from 'react'
import Header from './components/header';
import Body from './components/Body';
import './App.css';
import {useState} from 'react';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header search={search}/>
      <Body/>
    </div>
  )
}

export default App;
