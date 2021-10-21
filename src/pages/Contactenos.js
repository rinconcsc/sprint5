import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {Link} from "react-router-dom";

class Contactenos extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className=" d-flex justify-content-center align-content-center" style={{margin: '150px 0 60px 0'}}>
                    <div className="w-75 bg-secondary p-4 rounded-3">
                        <h1 className="text text-center">Contáctenos</h1>
                        <input className="form-control" type="text" id="nombre" name="nombre" placeholder="Nombre y Apellidos" required
                            autoFocus /><br />

                        <input className="form-control" type="email" id="correo" name="correo" placeholder="Correo electrónico"
                            required /><br />

                        <input className="form-control" type="number" id="telefono" name="telefono" placeholder="Teléfono de contacto"
                            required /><br />

                        <textarea className="form-control" name="mensaje" id="mensaje" placeholder="Escribe tu mensaje" required
                            style={{resize: "none"}}></textarea><br />

                        <Link className="btn btn-warning w-100" to="#">Enviar</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contactenos;