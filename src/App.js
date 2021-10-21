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
          <Route path="/registro" exact component={Registro}/>
          <Route path="/perfil" exact component={Perfil} />
        </Switch>
      </Router>
    );
  }
}

export default App;