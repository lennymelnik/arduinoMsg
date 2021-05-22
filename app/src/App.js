import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
async function sendMsg(msg) {
  return fetch('http://192.168.0.237:8080/send-msg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body : JSON.stringify({msg : msg})
  })
    .then(data => data.json())
 }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <input onChange={(e)=>{sendMsg(e.target.value)}}/>
       
      </header>
    </div>
  );
}

export default App;
