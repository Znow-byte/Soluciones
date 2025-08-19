// import ReactDOM from "react-dom";

//Hasta React 17 se utilizaba ReactDOM.render
// ReactDOM.render(<h1 className="color"> {saludo} </h1>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './style/styles.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
