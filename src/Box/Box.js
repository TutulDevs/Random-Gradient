import React from "react";
import "./Box.css";

const Box = (props) => {
    return (
        <div className="Box">
            <button onClick={props.click}>
                Generate
            </button>
            <p 
                title="Click to copy">
              background: {props.gradientCol};
            </p>
        </div>
    )
}

export default Box ;