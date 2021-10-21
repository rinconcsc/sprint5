import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom"
import APIInvoke from "../utils/APIInvoke";



class Registro extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            usuario: '',
            clave: '',
            correo: ''
        }
    }

    handleChange(e) {
        this.setState({
            usuario: e.target.value,
            clave: e.target.value,
            correo: e.target.value
        })
        alert(this.state.usuario)
    }

    async add() {
        const data = {
            usuario: this.state.usuario,
            clave: this.state.clave,
            correo: this.state.correo
        }

        const response = await APIInvoke.invokePOST("/api/v1/user", data)

        if (response.id !== 0) {
            this.props.history.push('/perfil');
        }else{
            console.log(response.message)
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                    <div className="w-75 bg-secondary p-4 rounded-3">
                        <h1 className="text text-center">Registro Usuario</h1>
                        <input className="form-control mb-3" type="text" id="usuario" name="usuario" placeholder="Usuario" required autoFocus value={this.state.usuario} onChange={this.handleChange.bind(this)} />
                        <input className="form-control mb-3" type="password" name="clave" id="clave" placeholder="Contraseña" required value={this.state.clave} onChange={this.handleChange.bind(this)} />
                        <input className="form-control mb-3" type="email" id="correo" name="correo" placeholder="Correo Electronico" value={this.state.correo} onChange={this.handleChange.bind(this)} />

                        <button className="btn btn-warning w-100 mb-3" onClick={this.add.bind(this)}>Registrarse</button>
                        <Link className="btn btn-dark w-100" to="/login">Volver</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Registro;