import React from "react";
import ReactDOM from "react-dom";
let marks = 50
class Passmessage extends React.Component {
  render() {
    return (<h1 style={{
      color: "green"
    }}
    >You are pass</h1>)
  }
}
class Failmessage extends React.Component {
  render() {
    return (<h1 style={{
      color: "red"
    }}
    >You are fail</h1>
    )
  }
 
}
function Display() {
  if(marks>=50)
  {
    return (
      <div>
        <Passmessage></Passmessage>
      </div>
    )
  }
else
{
  return (
    <div>
     
      <Failmessage></Failmessage>
    </div>
  )
}
}
var obj = new Failmessage();
const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(Display());