import React from "react";
import ReactDom from "react-dom";
function Display()
{
  return(
    <div>
    <img src="image/ant.jpg" width={500} height={500} alt="antImage"></img>   
    </div>
  );
}
ReactDom.render(<Display></Display>,document.getElementById("main"));