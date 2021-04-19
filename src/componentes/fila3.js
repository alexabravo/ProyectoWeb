import React, { Component } from 'react';
import "./fila3.scss"

import a4 from "../imagenes/conejito.PNG";
import a5 from "../imagenes/tortu.PNG";
import a6 from "../imagenes/pio.PNG";

class fila3 extends Component{
    render(){
        return(
            <div className ="contenedor">
                
                <div className="widget-1">
                    <img src ={a4}></img>
                </div>

                <div className="widget-2">
                    <img src ={a5}></img>
                </div>

                <div className="widget-3">
                    <img src ={a6}></img>
                </div>

            </div>
        );
    }
}

export default fila3;