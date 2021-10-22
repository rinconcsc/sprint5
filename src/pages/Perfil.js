import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import APIInvokke from "../utils/APIInvoke";
import { Link } from "react-router-dom"


class Perfil extends React.Component {

    constructor(arg) {
        super(arg)
        this.state = {
            Perfil: []
        }
    }

    async componentDidMount() {
        const response = await APIInvokke.invokeGET("/api/v1/user")
        this.setState({
            Perfil: response
        })
    }

    async remove(e, user) {
        e.preventDefault();
        await APIInvokke.invokeDELETE(`/api/v1/user/${user.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvokke.invokeGET("/api/v1/user")
        this.setState({
            Perfil: response
        })
    }

    render() {

        const arregloUsers = this.state.Perfil

        return (
            <div >
                <Navbar />
                <div className="main container " style={{ marginTop: '80px' }}>
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="text-start">
                                <h1>Lista de usuarios</h1>
                                <div className="text-end">
                                    <Link className="btn btn-warning btn-lg" to="/registro"><i className="bi bi-plus-circle"></i></Link>
                                </div>
                            </div>
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Correo Electronico</th>
                                        <th colSpan="2">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arregloUsers.map(
                                            (user) =>
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm" onClick={(e) => this.remove(e, user)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <Link to={`${user.id}`} className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#edit">
                                                            <i className="bi bi-pencil-square"></i>
                                                        </Link>


                                                        <div className="modal fade " id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content bg">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title text-dark" id="editLabel">Editar</h5>
                                                                    </div>
                                                                    <div className="modal-body">

                                                                        <input className="form-control mb-3" type="text" id="name" name="name" placeholder="Nombre" autoFocus value={this.state} />
                                                                        <input className="form-control mb-3" type="password" name="password" id="password" placeholder="Contraseña" />
                                                                        <input className="form-control mb-3" type="email" id="email" name="email" placeholder="Correo Electronico" />

                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button className="btn btn-warning w-100 mb-3" >Editar</button>
                                                                        <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal" aria-label="Volver">Cancelar</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </td>
                                                </tr>
                                        )
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Perfil;