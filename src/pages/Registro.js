import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom"
import APIInvoke from "../utils/APIInvoke";



class Registro extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            name: '',
            password: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        const target = e.target;
        const value =  target.value;
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    async add() {
        const data = this.state

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
                        <input className="form-control mb-3" type="text" id="name" name="name" placeholder="Nombre" autoFocus value={this.state.name} onChange={this.handleChange} />
                        <input className="form-control mb-3" type="password" name="password" id="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleChange} />
                        <input className="form-control mb-3" type="email" id="email" name="email" placeholder="Correo Electronico" value={this.state.email} onChange={this.handleChange} />

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