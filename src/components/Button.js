import React from "react";

import './CounterComp.css';

const Button = (props) => {

    return(
        <div>
            <button className="button" onClick={props.action} >{props.buttonTitle}</button>
        </div>
    )
}

export default Button