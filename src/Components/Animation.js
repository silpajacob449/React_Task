import React , {Component} from 'react';
import Chosenvalue from './Chosenvalue';
import { useState } from "react";
import './Animation.css';

export default function App() {
    const [isActive, setActive] = useState("false");
  
    const handleToggle = () => {
      setActive(!isActive);
    };
    return (
        <React.Fragment>
            <Chosenvalue ></Chosenvalue>
            <div className="animateBtn">
        <button onClick={handleToggle} className="btn btn-danger">Animate</button>
        </div>
        <div className={`box ${isActive ? "" : "isActive"}`}></div>
      </React.Fragment>
     
    );
  }
