import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FondoPri from "../assets/img/fondo_sobreNosotros.jpg"
import FondoMisi from "../assets/img/fondo_mision.jpg"
import FondoVisi from "../assets/img/fondo_vision.jpg"
import FondoValo from "../assets/img/fondo_valores.jpg"


class SobreNosotros extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid p-0 w-100">
                    <div className="card bg-dark text-white border-0">
                        <img src={FondoPri} className="card-img vh-100" alt="..." />
                        <div className="card-img-overlay d-flex align-items-center justify-content-center flex-lg-column ">
                            <h1 className="card-title fs-1 mt-lg-4">¿Quienes somos?</h1>
                            <p className="card-text p-5 w-75 fs-5">
                                Carpintería Isabella es una empresa de gestión familiar dedicada a la fabricación e instalación de
                                productos a medida en madera.Nuestra fábrica está ubicada en Hobo,Huila.<br />
                                Nos dedicamos principalmente a la elaboración de productos como dormitorios, armarios, porches,
                                cocinas
                                y otros.<br />
                                Elaboramos exclusivamente productos de madera por encargo, cada producto es único y ¡personalizado!
                            </p>
                        </div>
                    </div>
                    <div className="container-fluid mt-3 w-100">
                        <div className="card mb-3 border-0 rounded-pill">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={FondoMisi} className="img-fluid h-100" alt="..." />
                                </div>
                                <div className="col-md-6  d-flex align-items-center justify-content-center">
                                    <div className="card-body p-4 ">
                                        <h2 className="card-title">Nuestra Misión</h2>
                                        <p className="card-text">Brindar buen servicio a nuestros clientes,
                                            cumpliendo sus expectativas dentro de una manufactura de calidad,garantia y cumplimiento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-3 w-100">
                        <div className="card mb-3 border-0 rounded-pill">
                            <div className="row g-0">
                                <div className="col-md-6  d-flex align-items-center justify-content-center">
                                    <div className="card-body p-4 ">
                                        <h2 className="card-title">Nuestra visión</h2>
                                        <p className="card-text"> Lograr ser una empresa lider en la fabricacion de muebles en madera.
                                            Expandir nuestra manufactura a nivel nacional e internacional, logrando asi nuestro
                                            crecimiento
                                            empresarial.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={FondoVisi} className="img-fluid h-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-3 w-100">
                        <div className="card mb-3 border-0 rounded-pill">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={FondoValo} className="img-fluid h-100" alt="..." />
                                </div>
                                <div className="col-md-6  d-flex align-items-center justify-content-center">
                                    <div className="card-body p-4 ">
                                        <h2 className="card-title">Nuestros Valores</h2>
                                        <p className="card-text"> Somos una empresa con gestión familiar 100% colombiana.<br />
                                            Damos un trato profesional a todos nuestros clientes sabiendo adaptarnos a las necesidades
                                            individuales de cada uno.<br />
                                            Asesoramos a nuestros clientes para adaptarnos a sus necesidades.<br />
                                            Utilizamos exclusivamente productos de alta calidad.<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SobreNosotros;