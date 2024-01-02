import { useState } from "react";  //hook built into react
import './Form.css'






function Form({ addReservation }) {


const [name, setName] = useState(""); //empty string
const [date, setDate] = useState("") //empty string
const [time, setTime] = useState("") //empty string
const [number, setNumber] = useState("") //empty string
      
      
       function submitReservation(event) {
           event.preventDefault()
          
           if (name && date && time && number) {
           const newReservation ={
               id: Date.now(),
               name,
               date,
               time,
               number
           }
           addReservation(newReservation)
           clearInput()
       } else {
           // Alert user 
           alert("Please fill in all fields to make a reservation.");
       }
       function clearInput(){
           setName("")
           setDate("")
           setTime("")
           setNumber("")
       }
   }
       return (
           <form>
               <input 
                   type='text'
                   placeholder='Name'   
                   name='name'
                   value={name}
                   onChange={event => setName(event.target.value)}
               />   
      
               <input
                   type='text'
                   placeholder='mm/dd'
                   name='date'
                   value={date}
                   onChange={event => setDate(event.target.value)}
               />


               <input
                   type='text'
                   placeholder='00:00'
                   name='time'
                   value={time}
                   onChange={event => setTime(event.target.value)}
               />


               <input
                   type='text'
                   placeholder='Guests'
                   name='number'
                   value={number}
                   onChange={event => setNumber(event.target.value)}
               />
              
               <button onClick = { event => submitReservation(event) }>Make Reservation</button>
           </form>  
      
       )
      
       }
       export default Form;
