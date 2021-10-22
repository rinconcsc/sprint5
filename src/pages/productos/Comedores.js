import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Comedor1 from "../../assets/img/productos/Comedor 1.jpg"
import Comedor2 from "../../assets/img/productos/Comedor 2.jpg"
import Comedor3 from "../../assets/img/productos/Comedor 3.jpg"

class Comedores extends React.Component {

    render() {
        return(
            <div>
                <Navbar/>
                <NavbarP/>
                <div>
                        <div className="card-body bg-secondary">
                                <h2 className="text-center p-3">Comedores, para compartir en familia</h2>
                                    <div className="row row-cols-1 row-cols-md-3 g-3">
                                        <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Comedor pequeño</h3>
                                            <img src={Comedor1} className="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Este tipo de comedor es ideal para un espacio pequeño en el que nos
                                                    haga falta un lugar para sentarnos
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Comedor 4 puestos</h3>
                                            <img src={Comedor2} className="card-img-top" alt="Sala en modular"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">El comedor de 4 puestos es ideal para un espacio mediano-grande ya
                                                    que se puede ampliar hasta 6
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Comedor colonial</h3>
                                            <img src={Comedor3} className="card-img-top" alt="Sala en modular"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Si quieres darle a tu hogar un aura un poco mas rustico, el comedor
                                                    tipo colonial es perfecto para ti.
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
export default Comedores;