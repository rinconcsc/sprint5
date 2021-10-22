import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Baño1 from "../../assets/img/productos/Baño 1.jpg";
import Baño2 from "../../assets/img/productos/Baño 2.jpg";
import Baño3 from "../../assets/img/productos/Baño 3.jpg";

class Baños extends React.Component {
        render() {
                return(
                    <div>
                        <Navbar/>
                        <NavbarP/>
                            <div>
                                <div className="card-body bg-secondary">
                                    <h2 className="text-center p-3">Personalizacion para tu baño</h2>
                                        <div className="row row-cols-1 row-cols-md-3 g-3">
                                            <div className="col">
                                                <div className="card card border-warning bg-secondary">
                                                    <h3 className="card-title pt-2 text-center">Mueble para lavamanos y mueble auxiliar flotante grande</h3>
                                                    <img src={Baño1} className="card-img-top" alt="Sala en L"/>
                                                    <div className="card-body">
                                                        <p className="card-text text-start">Ideal para baños de espacio medio-grande. Viene en diferentes colores (a disponibilidad) desde marron, hasta miel, arena, niebla y caramelo.
                                                            Con este estilo flotente te unes a la era de la modernidad y la elegancia.
                                                        </p>
                                                        <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card card border-warning bg-secondary">
                                                    <h3 className="card-title pt-2 text-center">Mueble para lavamanos a piso</h3>
                                                    <img src={Baño2} className="card-img-top" alt="Sala en modular"/>
                                                    <div className="card-body">
                                                        <p className="card-text text-start">Este tipo de mueble es perfecto para un baño con un espacio pequeño. Viene con patas de acero inoxidable y esta hecho con madera de roble o aglomedaro (preferencia).
                                                            Viene en diferentes colores (a disponibilidad) desde marron, hasta miel, arena, niebla y caramelo.
                                                        </p>
                                                        <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card card border-warning bg-secondary">
                                                    <h3 className="card-title pt-2 text-center">Mueble para lavamanos y mueble auxiliar pequeño</h3>
                                                    <img src={Baño3} className="card-img-top" alt="Sala en modular"/>
                                                    <div className="card-body">
                                                        <p className="card-text text-start">Este tipo de mueble es de piso y viene con cuatro ruedas pequeñas resistentes para que sea facil la movilizacion del mueble (si se requiere).
                                                            El mueble del lavamanos viene con dos niveles y la puerta es corrediza.
                                                        </p>
                                                        <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            </div>

                            </div>


                        <Footer/>
                    </div>
                )

        }

}
export default Baños;