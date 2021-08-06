import React from 'react'
import ReactDOM from 'react-dom'


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
    <h1>全栈</h1>
    <a href="https://www.kaikeba.com">KKB</a>
    <FunctionComponent name="函数" />

  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsx);

