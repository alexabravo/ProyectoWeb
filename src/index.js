import React from "react";
import ReactDOM from "react-dom"; 
import 'bootstrap/scss/bootstrap.scss';
import App from './componentes/App';

import "./index.scss";

const StartComponent = () => {
    return <h1>New React App</h1>;  
}

ReactDOM.render(<App />, document.getElementById('root'));