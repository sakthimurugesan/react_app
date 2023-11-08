import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';

const arr = [
    "Hello",
    "World",
    "From",
    "Aliens",
    "I am Alien"
];

function Display() {
    var [ind, setInd] = useState(0);

    return (
        <div>
            <h1>{arr[ind]}</h1>
            <button onClick={() => {
                const newIndex = (ind + 1) % 5;
                setInd(newIndex);
            }}>Click Here</button>
        </div>
    );
}

ReactDOM.render(<Display />, document.getElementById("main"));
