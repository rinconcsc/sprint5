import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";

import { Link } from "react-router-dom"

import Cuna1 from "../../assets/img/productos/Cuna 1.jpg"
import Cuna2 from "../../assets/img/productos/Cuna 2.jpg"
import Cuna3 from "../../assets/img/productos/Cuna 3.jpg"

class Escritorios extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <NavbarP />
                    <div>

                            <div className="card-body bg-secondary">
                            <h2 className="text-center p-3">Para el cuidado y proteccion de nuestro pequeño</h2>
                                <div className="row row-cols-1 row-cols-md-3 g-3">
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Cuna sencilla</h3>
                                            <img src={Cuna1} className="card-img-top" alt="Sala en L"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">CEsta cama cuna esta hecha en madera de cedro y cuenta con suficiente espacio para que tu personita se
                                                    pueda mover con facilidad.
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Cuna reclinable</h3>
                                            <img src={Cuna2} className="card-img-top" alt="Sala en modular"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">ste tipo de cuna maneja un estilo clasico y antiguo. Ademas cuenta con dos patas en forma de arco para
                                                    que la cuna se pueda reclinar de un lado a otro 
                                                </p>
                                                <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card card border-warning bg-secondary">
                                            <h3 className="card-title pt-2 text-center">Cuna con gavetas</h3>
                                            <img src={Cuna3} className="card-img-top" alt="Sala en modular"/>
                                            <div className="card-body">
                                                <p className="card-text text-start">Esta cuna es perfecta ya que ademas de ahorrarnos espacio en la habitacion del bebe, tambien nos permite
                                                    tener todo lo que necesitamos a la hora de atender a nuestra personita como se merece
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
export default Escritorios;