import React, { Component } from 'react';
import "./fila2.scss"

import a1 from "../imagenes/perrito.PNG";
import a2 from "../imagenes/gatito.PNG";
import a3 from "../imagenes/pececito.PNG";

class fila2 extends Component{
    render(){
        return(
            <div className ="contenedor">
                
                <div className="widget-1">
                    <img src ={a1}></img>
                </div>

                <div className="widget-2">
                    <img src ={a2}></img>
                </div>

                <div className="widget-3">
                    <img src ={a3}></img>
                </div>

            </div>
        );
    }
}

export default fila2;