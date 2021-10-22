import React from "react";
import { Link } from "react-router-dom";

function NavbarP(props){
    return(
    <nav >
        <div className="container-fluid w-100 mb-4 bg-secondary" style={{ margin: '100px 0 180px 0' }}>
                    <h1 className="text-center text-dark ">Bienvenido al catalogo de nuestros productos</h1><br />
                    <div className="card text-center bg-secondary ">
                        <div className="card-header ">
                            <ul className="nav nav-tabs card-header-tabs ">
                                <li className="nav-item ">
                                    <Link className="nav-link text-warning  " aria-current="true" to="/productos/salas">Salas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/comedores">Comedores</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/cosinas">Cocinas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/armarios">Armarios y Gavetas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/escritorios">Escritorios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/cunas">Cunas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/baños">Baños</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-warning " to="/productos/masMuebles">Otros</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
        </div>
    </nav>
    )
}
export default NavbarP;