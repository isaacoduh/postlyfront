import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
import {Provider} from 'react-redux'
// import "./index.css";
import "./assets/css/style.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render( 
    <React>
        <App/>
    </React>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();