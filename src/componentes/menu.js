import React, {Component} from "react";
import "./menu.scss";
import logo from "../imagenes/logo.jpeg";
import carrito from "../imagenes/compra.png";
import busqueda from "../imagenes/busqueda.png";

class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid logo">
                    <img src = {logo} widht = "120" height = "100"/>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"> <a className="nav-link" href="#"> </a> </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle Opcion" href="#" data-bs-toggle="dropdown"><b>MASCOTAS</b></a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Perros</a></li>
                                <li><a className="dropdown-item" href="#">Gatos</a></li>
                                <li><a className="dropdown-item" href="#">Aves</a></li>
                                <li><a className="dropdown-item" href="#">Peces</a></li>
                                <li><a className="dropdown-item" href="#">Roedores</a></li>
                                <li><a className="dropdown-item" href="#">Reptiles y Mascotas exoticas</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle Opcion" href="#" data-bs-toggle="dropdown"><b>MARCA</b></a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">A-B-C</a></li>
                                <li><a className="dropdown-item" href="#">D-E-F</a></li>
                                <li><a className="dropdown-item" href="#">G-H-I-J</a></li>
                                <li><a className="dropdown-item" href="#">K-L-M</a></li>
                                <li><a className="dropdown-item" href="#">O-N-P</a></li>
                                <li><a className="dropdown-item" href="#">Q-R-S-T</a></li>
                                <li><a className="dropdown-item" href="#">u-v-w</a></li>
                                <li><a className="dropdown-item" href="#">X-Y-Z</a></li>
                                </ul>
                            </li>

                            <li className="nav-item"><a className="nav-link Opcion" href="#"><b>NOSOTROS</b></a></li>
                            <li className="nav-item"><a className="nav-link Opcion" href="#"><b>MI_MASCOTA</b></a></li>
                            <li className="nav-item"><a className="nav-link Opcion" href="#"><b>NUESTRAS_TIENDAS</b></a></li>
                            <li className="nav-item"><a className="nav-link Opcion" href="#"><b>DANA_HOSPITAL</b></a></li>
                            <li className="nav-item"><a className="nav-link Opcion" href="#"><b>OFERTAS</b></a></li>

                        </ul>
                    </div> 
                    <div className="container-fluid icono">
                        <img src = {carrito} widht = "20" height = "20"/>
                    </div>

                    <div className="container-fluid">
                        <img src = {busqueda} widht = "20" height = "20"/>
                    </div>
                </div> 
            </nav>
        );
    }
}
export default Menu;