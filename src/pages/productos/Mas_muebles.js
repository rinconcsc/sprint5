import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Repisa1 from "../../assets/img/productos/Repisa 1.jpg"
import Repisa2 from "../../assets/img/productos/Repisa 2.jpg"
import Repisa3 from "../../assets/img/productos/Repisa 3.jpg"
import Butaca1 from "../../assets/img/productos/Butacas.jpg"
import Perro1 from "../../assets/img/productos/Perro 1.jpg"

class Mas_muebles extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <NavbarP />
                <div>

                    <div className="card-body bg-secondary">
                    <h2 className="text-center p-3">Repisas, butacas y más</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card card border-warning bg-secondary">
                                    <h3 className="card-title pt-2 text-center">Repisas</h3>
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={Repisa1} class="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={Repisa2} class="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={Repisa3} class="d-block w-100" alt="..."/>
                                            </div>

                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Anterior</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Siguiente</span>
                                        </button>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text text-start">Repisas personalidas. Hechas a medida y para lo que
                                            necesites. Con las repisas de Carpinteria Isabella
                                            tus articulos favoritos estaran organizados y sobre la mejor madera de nogal. Vienen en
                                            diferentes gamas de colores.
                                        </p>
                                        <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card card border-warning bg-secondary">
                                    <h3 className="card-title pt-2 text-center">Butacas</h3>
                                    <img src={Butaca1} className="card-img-top" alt="Sala en modular"/>
                                    <div className="card-body">
                                        <p className="card-text text-start">Contamos con una gran variedad de butacas a tu gusto hechas
                                            en la mas resistente madera que te serviran para completar cualquier espacio, ya sea en
                                            el interior o exterior.
                                        </p>
                                        <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card card border-warning bg-secondary">
                                    <h3 className="card-title pt-2 text-center">Casa para perro</h3>
                                    <img src={Perro1} className="card-img-top" alt="Sala en modular"/>
                                    <div className="card-body">
                                        <p className="card-text text-start">A nuestro mejor amigo de cuatro patas tambien hay que darle
                                            la mejor atencion que se merece y en Carpinteria Isabella
                                            sabemos eso.
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
export default Mas_muebles;