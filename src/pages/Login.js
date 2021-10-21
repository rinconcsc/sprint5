import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className=" d-flex justify-content-center align-content-center" style={{margin: '150px 0 180px 0'}}>
                    <div className="w-75 bg-secondary p-4 rounded-3">
                        <form> 
                        <h1 className="text text-center">Iniciar sesion</h1>
                        <input className="form-control mb-3" type="text" id="usuario" name="usuario" placeholder="Usuario" required autoFocus />

                        <input className="form-control mb-3" type="password" name="clave" id="clave" placeholder="Contraseña" required />
                        <Link className="btn btn-warning w-100 mb-3" to="/perfil">Ingresar</Link>
                        <p className="text">¿No tiene usuario? registrese <Link className="text-warning" to="/registro">Aquí</Link></p>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Login;