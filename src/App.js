import { useState } from "react";
import {  HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/Login";
import Mostrador from "./modules/Mostrador";
import Servicios from "./modules/Servicios";
import ServiciosSucursal from "./modules/ServiciosSucursal";
import Sucursal from "./modules/Sucursal";

function App() {
  const [sucursalesState,setsucursalesState]=useState([])
  const obtenerSucursales = async () => {
    const response = await fetch('http://192.168.200.216:8084/gestor/api/sucursales',{
      headers : { 'Content-Type': 'application/json' },
      method: 'GET',
      mode: 'cors', 
    //  body : bodyJson,
      cache: 'default',
    }) 
    const responseJson = await response.json()
      setsucursalesState(responseJson)
      console.log("******************",responseJson)
  }
  const [serviciosSucursalState,setserviciosSucursalState]=useState([])
  const obtenerServicios = async () =>{
    const response = await fetch('http://192.168.200.216:8084/gestor/api/servicios',{
      headers : { 'Content-Type': 'application/json' },
    method: 'GET',
    mode: 'cors', 
  //  body : bodyJson,
    cache: 'default',
    })
    const responseJson = await response.json()
    setserviciosSucursalState(responseJson) 
    
  }
    return ( 
      <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Login" element={<Login />}/>
          <Route path="/registrarsucursal" element={<Sucursal/>}/>
          <Route path="/registrarservicio" element={<Servicios/>}/>
          <Route path="/registrarserviciosucursal" element={<ServiciosSucursal 
          obtenerSucursales={obtenerSucursales} sucursalesState={sucursalesState}
          obtenerServicios={obtenerServicios} serviciosSucursalState={serviciosSucursalState}/>}/>
          <Route path="/mostrador" element={<Mostrador 
          obtenerSucursales={obtenerSucursales} sucursalesState={sucursalesState}
          obtenerServicios={obtenerServicios} serviciosSucursalState={serviciosSucursalState}/>}/>
        </Routes>
      </Router>
    </>
    );
}

export default App;

