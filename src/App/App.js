import './App.css';
import React from 'react';
import Form from "../Form/Form"
import Reservations from "../Reservations/Reservations"
import SingleRes from "../SingleRes/SingleRes"
import { useState, useEffect } from "react"








function App() {



  const dummy = [
  { "id": 18907224, "name": "Christie", "date": "8/8", "time": "7:00", "number": 3 },
  { "id": 18907225, "name": "Alex", "date": "8/9", "time": "6:30", "number": 2 },
  { "id": 18907226, "name": "Taylor", "date": "8/10", "time": "8:00", "number": 4 }
]


const [reservations, setReservations] = useState([])
const [error, setError] = useState('')


useEffect(() => {
  fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
  .then(data => setReservations(data))
  .catch(error => setError(error.message))

}, []);


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      {/* <Form/> */}
      </div>
      <div className='resy-container'>
      </div>
      <Reservations reservations={reservations}/>
//        {error && <h2>Something happened with getting the reservations.</h2> }
    </div>
  );
}

export default App; 