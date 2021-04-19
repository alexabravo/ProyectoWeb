import React, { Component } from 'react';
import "./fila1.scss"

import w1 from "../imagenes/g1.PNG";
import w2 from "../imagenes/g2.PNG";
import w3 from "../imagenes/g3.PNG";

class fila1 extends Component{
    render(){
        return(
            <div className ="contenedor">
                <div className="widget-1">
                    <img src ={w1}></img>
                </div>

                <div className="widget-2">
                    <img src ={w2}></img>
                </div>

                <div className="widget-3">
                    <img src ={w3}></img>
                </div>

            </div>
        );
    }
}

export default fila1;