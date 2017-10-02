import React from 'react';

import Form from './form';
import Guesses from './guesses';
import Status from './status';

import './board.css';

export default function Board(props){
    return (
            <div className="board">
                <nav>
                <span className="nav-text1">WHAT?</span>
                <span className="nav-text2">+NEW GAME</span>
                </nav>
                <h1>HOT or COLD</h1> 
                <div className="board2">
                    <Status/>
                    <Form/>
                    <Guesses/>
                </div>
            </div>
    )
};