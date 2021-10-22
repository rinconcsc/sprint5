import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"

import Sala from "../assets/img/img_cards_productos/Sofa.png" 
import Comedor from "../assets/img/img_cards_productos/Comedor.png"
import Cocina from "../assets/img/img_cards_productos/Cocina.png"
import Baño from "../assets/img/img_cards_productos/Baño.png"
import Armario from "../assets/img/img_cards_productos/Cama.png"
import Escritorio from "../assets/img/img_cards_productos/Escritorio.png"
import Cuna from "../assets/img/img_cards_productos/Cuna.png"
import Repisa from "../assets/img/img_cards_productos/Repisa.png"


class Productos extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid w-100 bg-secondary pt-4" style={{ marginTop: '70px' }}>
                    <h1 className="text-center text-dark mt-4"><strong>Productos de la Carpintería Isabella</strong></h1>
                    <div className="container">

                        <div className="row">
                            <div className="col text-center p-3 m-5 border border-5 rounded-3 border-warning bg-white ">
                                <img src={Sala} className="w-100" alt="Muebles para la sala"
                                    title="Muebles para la sala" />
                                <h3><strong>Muebles para la sala</strong></h3>
                                <Link to="/productos/salas"><button className="btn btn-warning">Ver productos</button></Link>
                            </div>

                            <div className="col text-center bg-white p-5 m-5 border border-5 rounded-3 border-warning">
                                <img src={Comedor} className="w-100" alt="Comedores" title="Comedores" />
                                <h3><strong>Comedores</strong></h3>
                                <a href="Comedores.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-center bg-white p-3 m-5 border border-5 rounded-3 border-warning">
                                <img src={Cocina} className="w-100" alt="Cocinas" title="Cocinas" />
                                <h3><strong>Cocinas</strong></h3>
                                <a href="Cocinas.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>

                            <div className="col text-center bg-white p-3 m-5 border border-5 rounded-3 border-warning">
                                <img src={Baño} className="w-100" alt="Muebles para el baño" title="Muebles para el baño" />
                                <h3><strong>Muebles para el baño</strong></h3>
                                <a href="Baños.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-center bg-white p-3 m-5 border border-5 rounded-3 border-warning">
                                <img src={Armario} className="w-100" alt="Armarios y Gavetas" title="Armarios y Gavetas" />
                                <h3><strong>Armarios-Gavetas</strong></h3>
                                <a href="Armarios.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>
                            <div className="col text-center bg-white p-3 m-5 border border-5 rounded-3 border-warning">
                                <img src={Escritorio} width="266.7px" alt="Escritorios" title="Escritorios" />
                                <h3><strong>Escritorios</strong></h3>
                                <a href="Escritorios.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-center bg-white p-3 m-5 border border-5 rounded-3 border-warning">
                                <img src={Cuna} className="w-100" alt="Cunas" title="Cunas" />
                                <h3><strong>Cunas</strong></h3>
                                <a href="Cunas.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>
                            <div className="col text-center bg-white p-3 m-5 border border-5 rounded-3 border-warning">
                                <img src={Repisa} className="w-100" alt="Más muebles" title="Más muebles" />
                                <h3><strong>Más muebles</strong></h3>
                                <a href="Mas_muebles.html"><button className="btn btn-warning">Ver productos</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Productos;