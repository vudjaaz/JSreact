import React from "react";
import './message.css';



export const Message = ({ text, counter, setCounter }) => {

    return <div className="wrapper">
        <div className="text">{text}</div>
        <button className="btn" onClick={() => setCounter(counter + 1)}> Increace </button>
        <div className="counter">{counter}</div>

    </div>
} 
