import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import IntegrantesPage from './pages/integrantes';
import ProyectosPage from './pages/proyectos';
import PublicacionesPage from './pages/publicaciones';
import EventosPage from './pages/eventos';
import ColaboracionPage from './pages/colaboracion';
import AutoScrollToTop from './components/AutoScrollToTop';

function App() {

  return (
    <Router>
      <AutoScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacto" exact component={ContactPage} />
          <Route path="/integrantes" exact component={IntegrantesPage} />
          <Route path="/proyectos" exact component={ProyectosPage} />
          <Route path="/publicaciones" exact component={PublicacionesPage} />
          <Route path="/eventos" exact component={EventosPage} />
          <Route path="/colaboracion" exact component={ColaboracionPage} />
        </Switch>
    </Router>
  );
}

export default App;
