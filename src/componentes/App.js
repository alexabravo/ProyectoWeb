import React, {Component} from "react";
import NavBar from "./menu";
import Carousel from "./Carousel";
import Fila1 from "./fila1";
import Fila2 from "./fila2";
import Fila3 from "./fila3";


class App extends React.Component{
  render(){
    return(

      <div className="app">

        <div className = "navbar">
            <NavBar/>
        </div>
        
        <div className = "carousel">
            <Carousel/>
        </div>
    
        <div className = "fila1">
            <Fila1/>
        </div>

        <div className = "fila2">
            <Fila2/>
        </div>

        <div className = "fila3">
            <Fila3/>
        </div>

      </div>
    );
  }
}
  export default App;