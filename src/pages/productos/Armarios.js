import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Armario1 from "../../assets/img/productos/Armario 1.jpg";
import Armario2 from "../../assets/img/productos/Armario 2.jpg";
import Armario3 from "../../assets/img/productos/Armario 3.png";
import Gaveta1 from "../../assets/img/productos/Gaveta 1.jpg";
import Gaveta2 from "../../assets/img/productos/Gaveta 2.jpg";

class Armarios extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                <NavbarP/>    

                    <div>
                        <div className="card-body bg-secondary">
                            <h2 className="text-center p-3">Armario, cómodas y gavetas perfectas para tu hogar</h2>
                                <div className="row row-cols-1 row-cols-md-3 g-3">
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Cómoda moderna</h3>
                                            <img src={Armario1} className="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Elegante cómoda de 8 puestos, 4 con puerta y 4 tipo repisa.
                                                    Ideal para guardar objetos que no ocupen mucho espacio.
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Armario minimalista</h3>
                                            <img src={Armario2} className="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Este estilo de mueble tiene un diseño sencillo y elegante.
                                                    Se caracteriza por su pureza y la decencia de sus formas. Con la ausencia de ornamentos
                                                    y puertas.
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Armario grande</h3>
                                            <img src={Armario3} class="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Armario moderno con 4 cajones en la parte inferior y dos
                                                    puertas grandes corredizas en la parte media-superior.
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Mesa de noche convencional</h3>
                                            <img src={Gaveta1} class="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Perfecta mesa de noche moderna hecha en madera de nogal o
                                                    cedro que garantiza mayor resistencia y durabilidad..
                                                    Viene en dos hermosos colores (a disponibilidad).
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Mesa de noche minimalista</h3>
                                            <img src={Gaveta2} className="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Espectacular mesa de noche, ideal para darle a tu habitacion
                                                    un toque de modernismo y elegancia. Viene en dos
                                                    diferentes colores.
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
export default Armarios;