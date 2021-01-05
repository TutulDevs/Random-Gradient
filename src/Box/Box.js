import React from "react";
import "./Box.css";

const Box = (props) => {
    return (
        <div className="Box">
            <button onClick={props.click}>
                Generate
            </button>
            <p className="ColCode" title="Click to copy">
              background: {props.gradientCol};
            </p>

            <input 
                className="Range"
                type="range"
                min="-360"
                max="360"
                value={props.val}
                onChange={props.change} />            
        </div>
    )
}

export default Box ;

/**
 <p className="Footer">
                Made by  
                <a href="https://twitter.com/TutulDevs"> Tutul</a>
            </p>
 */