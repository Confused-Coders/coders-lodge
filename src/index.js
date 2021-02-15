import React, { Component } from 'react';
import ReactDom from "react-dom";
import './asset/scss/main.scss';
import App from "./component/App";

class Main extends Component {
    render() {
        return(
            <div>
               <App /> 
            </div>
        );
    }
}

export default Main;

ReactDom.render(<App /> , document.getElementById("main"));