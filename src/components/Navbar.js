import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/perfil_sin_fondo2.png";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning p-0 fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width="70" height="70" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-4 " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <Link className="nav-link active text-secondary" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to="/sobreNosotros">¿Quienes somos?</Link>
                        </li>
                        <li className="btn-group">
                            <Link to="/productos" className="btn btn-warning fs-4 text-secondary btn-outline-warning">Productos</Link>
                            <button type="button"
                                className="btn btn-warning text-secondary dropdown-toggle dropdown-toggle-split btn-outline-warning"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" to="Salas.html">Salas</Link></li>
                                <li><Link className="dropdown-item" to="Comedores.html">Comedores</Link></li>
                                <li><Link className="dropdown-item" to="Cocinas.html">Cocinas</Link></li>
                                <li><Link className="dropdown-item" to="Baños.html">Baños</Link></li>
                                <li><Link className="dropdown-item" to="Armarios.html">Armarios y gavetas</Link></li>
                                <li><Link className="dropdown-item" to="Escritorios.html">Escritorios</Link></li>
                                <li><Link className="dropdown-item" to="Cunas.html">Cunas</Link></li>
                                <li><Link className="dropdown-item" to="Mas_muebles.html">otros</Link></li>
                            </ul>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to="/contactenos">Contáctenos</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-nav align-items-center justify-content-center flex-row">
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" to="/login">
                            <i className="bi bi-person-circle fs-1" ></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" rel="noopener"
                            href={'https://www.facebook.com/MuebleriaYCarpinteriaIsabella/'}><i className="bi bi-facebook fs-1"
                            ></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" rel="noopener"
                            href={'https://www.instagram.com/mueblesycarpinteriaisabella/?hl=es'}><i className="bi bi-instagram fs-1"
                            ></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" rel="noopener" href={'https://wa.me/+573212529034'}><i
                            className="bi bi-whatsapp fs-1" ></i></a>
                    </li>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;