import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
async function sendMsg(msg) {
  return fetch('https://dev.leonardmelnik.com/send-msg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body : JSON.stringify({msg : msg, to : document.getElementById('to').value})
  })
    .then(data => data.json())
 }
function App() {
  return (

      <div className="App" style={{backgroundImage: 'https://lh3.googleusercontent.com/57CXJmSkcB8F0yBV4tXK3wlJgGKKd9HPwxZrXhP84MjELY7gfa6W-59O9ebvEutY3P4fcA038UDZ07G7mYb-z_SIu_C6UGdoR483112NRCEwZ03-YSFVH7U1xasnLOU2Kum9zTQM3zbl8mgniL6Yatv9Rvjv84THXcqewc_i1E4VguW1Y5iuIAXtiInQfPfc6J9K6HuMHikTrk2eX1usYZmEtKMpp4aRpCluujXz6p86z2EptpM5DPV6h6h5OTiKuQW-qJTuzNJdkb_JyBUTM2Qo_yqnyZ3WlVPZWcxg6mldBVtHhz_CRHFwMu3T2GVclDmvJtEGIitFU1_r3xRfAdT_FIxkaOJRK0v4WoLttP7oOdiaUvr4VpKv0KlfDVSUwYGWN7KMNCm_ZvSbENSbuYicq9rY2YUo2MJsXqsgjvNRkuLaLPjwRauqHMieNL6yo3CjZhJBe5QyZBgi0620lBjIrhSxAkSOEI6dHU0S6H_IwKAXj3wD3bWNo07wqSPXOz4MfuJ_S67fVRIq9gX0jotNeDYk6xKa8GXYzFspApRNKUYOtwNaCFybPuSMYn9hXgEaiNiA8yB30nzimtLpakk_FueiHS_6ZKNFKkLSDuxzcgGEgw1aFclHZ3-tlV4lFdZc6JzwMzPteIlR7rUmB16D9fEkP7lP7EGImvecceIYhs5obmSR4YdHg4FXm3myc3ied79bWu4YASE4jsY9zGXZgQ=w1280-h720-no?authuser=0'}}>

      
      <header className="App-header">
        
        <h1>This is the love messenger</h1>
        <input onChange={(e)=>{sendMsg(e.target.value)}}/>
        <select id='to'>
          <option>stef</option>
          <option>lenny</option>

        </select>
       
      </header>
    </div>
  );
}

export default App;
