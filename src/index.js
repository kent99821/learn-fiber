import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from './kreact/react-dom';


import "./index.css"

function FunctionComponent(props){
  return (
    <div className="border">
      <p>{props.name}</p>
    </div>
  );
}

const jsx = (
  <div className="border">
    <h1>Fiber</h1>
    <a href="https://react.docschina.org/">React</a>
    <FunctionComponent name="函数" />

  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsx);

