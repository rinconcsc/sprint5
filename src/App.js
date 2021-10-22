import React from "react";
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import Index from "./pages/Index";
import Login from "./pages/Login";
import SobreNosotros from "./pages/SobreNosotros";
import Contactenos from "./pages/Contactenos";
import Productos from "./pages/Productos";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Salas from "./pages/productos/Salas";

import Comedores from "./pages/productos/Comedores";
import Cocinas from "./pages/productos/Cocinas";
import Baños from "./pages/productos/Baños";
import Armarios from "./pages/productos/Armarios";
import Escritorios from "./pages/productos/Escritorios";
import Cunas from "./pages/productos/Cunas";
import Mas_muebles from "./pages/productos/Mas_muebles";

import Editar from "./pages/Editar";



class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/sobreNosotros" exact component={SobreNosotros}/>
          <Route path="/contactenos" exact component={Contactenos}/>
          <Route path="/productos" exact component={Productos}/>
          <Route path="/productos/salas" exact component={Salas}/>
          <Route path="/productos/comedores" exact component={Comedores}/>
          <Route path="/productos/cosinas" exact component={Cocinas}/>
          <Route path="/productos/baños" exact component={Baños}/>
          <Route path="/productos/armarios" exact component={Armarios}/>
          <Route path="/productos/escritorios" exact component={Escritorios}/>
          <Route path="/productos/cunas" exact component={Cunas}/>
          <Route path="/productos/masMuebles" exact component={Mas_muebles}/>
          <Route path="/registro" exact component={Registro}/>
          <Route path="/perfil" exact component={Perfil} />
 ramaProductos

          <Route path="/perfil/editar/:userId" exact component={Editar} />
 main
        </Switch>
      </Router>
    );
  }
}

export default App;