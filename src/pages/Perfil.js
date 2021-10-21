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

    async remove(e, user){
        e.preventDefault();
        await APIInvokke.invokeDELETE(`/api/v1/user/${user.id}`)
    }

    async componentDidUpdate(){
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
                                            user =>
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm" onClick={(e) => this.remove(e, user)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <Link className="btn btn-warning btn-sm" to="#">
                                                            <i className="bi bi-pencil-square"></i>
                                                        </Link>
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