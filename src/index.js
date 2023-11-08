import React from "react";
import ReactDom from "react-dom";

function PassMessage()
{
  return(
    <h1 style={
      {
        color:'green',
        fontWeight:'bolder'
      }
    }>You are Pass</h1>
    );
  }
  function FailMessage()
  {
    return(
      <h1 style={
        {
        color:'green',
        fontWeight:'bolder'
      }
    }>You are Pass</h1>
  );
}
var marks=50;
function Display()
{
  if(marks>=50)
  return(
<PassMessage></PassMessage>
);
  else
  return(
<FailMessage></FailMessage>
);
}
ReactDom.render(<Display></Display>,document.getElementById("main"));