import React from 'react';

import './guesses.css'

export default function Guesses(props) {

    const guessArray = [20, 40, 60, 80];
    let guessString="";

    for (let i=0; i< guessArray.length; i++) {
        guessString += guessArray[i] + " ";
    }
    console.log(guessString);
    return (
        <span className = "guesses">{guessString}</span>
    )
}