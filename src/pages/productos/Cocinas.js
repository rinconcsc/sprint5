import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Cocina1 from "../../assets/img/productos/Cocina 1.jpg"

class Cocinas extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <NavbarP/>
                    <div>
                            <div className="card-body bg-secondary">
                                <h2 className="text-center p-3">Cocinas con tu estilo y nuestra calidad</h2>
                                     <div className="row row-cols-1 row-cols-md-3 g-3">
                                        <div className="col">
                                            <div className="card card border-warning bg-secondary">
                                                <h3 className="card-title pt-2 text-center">Cocina integral</h3>
                                                <img src={Cocina1} className="card-img-top" alt="Sala en L"/>
                                                <div className="card-body">
                                                    <p className="card-text text-start">En Carpinteria Isabella hacemos la cocina de tus sueños.
                                                        Podemos usar pra este tipo de trabajos maderas desde el roble hasta el aglomerado.
                                                        Los colores para los muebles dependen de la disponibilidad.
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

export default Cocinas;