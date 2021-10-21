import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Fondo from "../assets/img/fondo_principal.jpg"

class Index extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid p-0 vh-100">
                    <div className="card bg-dark text-secondary border-0">
                        <img src={Fondo} className="card-img vh-100" alt="Fondo"/>
                        <div className ="card-img-overlay d-flex align-items-center justify-content-center flex-lg-column">
                        <h1 className ="card-title fs-1 ">CARPINTERÍA ISABELLA</h1>
                        <h3 className ="card-text">Construyendo sueños con arte</h3>
                        <Link to="/productos" className ="btn btn-warning">Ver Catalogo</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;