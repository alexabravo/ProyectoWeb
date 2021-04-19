import React, { Component } from 'react';
import fotito1 from "../imagenes/1.png";
import fotito2 from "../imagenes/2.png";
import fotito3 from "../imagenes/3.png";
import fotito4 from "../imagenes/4.png";
import fotito5 from "../imagenes/5.png";

class Carousel extends Component{
    render(){
        return(
            <div id="MyCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

               <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={fotito1} className="d-block w-100" alt="..."></img>
                     </div>

                    <div className="carousel-item">
                        <img src={fotito2} className="d-block w-100" alt="..."></img>
                    </div>

                    <div className="carousel-item">
                        <img src={fotito3} className="d-block w-100" alt="..."></img>
                    </div>

                    <div className="carousel-item">
                        <img src={fotito4} className="d-block w-100" alt="..."></img>
                    </div>

                    <div className="carousel-item">
                        <img src={fotito5} className="d-block w-100" alt="..."></img>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#MyCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#MyCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;