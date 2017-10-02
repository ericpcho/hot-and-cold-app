import React from 'react';

import './form.css'

export default function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Enter your Guess" class="text"></input>
            <input type="submit" class="button" value="Guess"></input>
            <span className="guess-number">Guess #<p>1</p>!</span>
        </form>
    )
}