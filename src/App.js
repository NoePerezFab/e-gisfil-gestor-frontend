import {  HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/Login";
import Servicios from "./modules/Servicios";
import ServiciosSucursal from "./modules/ServiciosSucursal";
import Sucursal from "./modules/Sucursal";


function App() {
    return ( 
      <>
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
          <Route path="/registrarsucursal" element={<Sucursal/>}/>
          <Route path="/registrarservicio" element={<Servicios/>}/>
          <Route path="/registrarserviciosucursal" element={<ServiciosSucursal/>}/>
        </Routes>
      </Router>
    </>
    );
}

export default App;

