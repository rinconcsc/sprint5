import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Escritorio1 from "../../assets/img/productos/Escritorio 1.jpg"
import Escritorio2 from "../../assets/img/productos/Escritorio 2.jpg"
import Escritorio3 from "../../assets/img/productos/Escritorio 3.jpg"

class Armarios extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <NavbarP />
                    <div>
                            <div className="card-body bg-secondary">
                                <h2 className="text-center p-3">Escritorios y accesorios para mas comodidad</h2>
                                <div className="row row-cols-1 row-cols-md-3 g-3">
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Escritorio con libreria</h3>
                                            <img src={Escritorio1} className="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Carpinteria Isabella sabemos como ahorrar espacios con
                                                    estilo y glamour. Este tipo de escritorio viene con
                                                    suficiente espacio.
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Escritorio para niños</h3>
                                            <img src={Escritorio2} className="card-img-top" alt="Sala en modular"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Este pequeño pero entretenido escritorio viene con todo lo
                                                    necesario para que tu personita especial juegue y se divierta
                                                    mientras colorea
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Mesa para computador portatil</h3>
                                            <img src={Escritorio3} className="card-img-top" alt="Sala en modular"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Olvidate de las incomodidades y las malas posturas a la hora
                                                    de utilizar tu equipo portatil. Con esta sofisticada mesa podras tener la mejor
                                                    postura para tu cuerpo cuando uses el portatil.
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>

                <Footer />
            </div>
        )
    }

}
export default Armarios;