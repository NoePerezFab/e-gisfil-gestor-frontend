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
    const response = await fetch('../gestor/api/sucursales',{
      headers : { 'Content-Type': 'application/json' },
      method: 'GET',
      mode: 'cors', 
    //  body : bodyJson,
      cache: 'default',
    }) 
    const responseJson = await response.json()
      setsucursalesState(responseJson)
  }
  const [serviciosSucursalState,setserviciosSucursalState]=useState([])
  const obtenerServicios = async () =>{
    const response = await fetch('../gestor/api/servicios',{
      headers : { 'Content-Type': 'application/json' },
    method: 'GET',
    mode: 'cors', 
  //  body : bodyJson,
    cache: 'default',
    })
    const responseJson = await response.json()
    setserviciosSucursalState(responseJson)   
  }

  const [sucursalState,setsucursalState]=useState(undefined)
  const handlesucursal = async (e) =>{
    await obtenerServicios()
    const sucursalencontrada= sucursalesState.find((sucursal)=>sucursal.id===e.target.value)
    sucursalencontrada.servicios ===null ? 
    setserviciosmostradosState(serviciosSucursalState) :
    setserviciosmostradosState(filtrarservicios(serviciosSucursalState,sucursalencontrada.servicios))
    setsucursalState(sucursalencontrada)
  }
  const filtrarservicios = (array,filter)=>{
    const filtrado = array.map((servicio)=>{
      let flag=false
      for(let i=0; i<filter.length;i++){
        if(filter[i].id===servicio.id){
          flag=true
          break;
        }
      }
      if(flag===false){
        return servicio
      }
    })
      const filtrado2 = filtrado.filter((servicio)=>servicio!==undefined)
      return filtrado2
      
  } 
  const [serviciosmostradosState,setserviciosmostradosState]=useState([])

  

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
          obtenerServicios={obtenerServicios} serviciosSucursalState={serviciosSucursalState}
          sucursalState={sucursalState} handlesucursal={handlesucursal} serviciosmostradosState={serviciosmostradosState}
          />}/>
          <Route path="/mostrador" element={<Mostrador 
          obtenerSucursales={obtenerSucursales} sucursalesState={sucursalesState}
          sucursalState ={sucursalState} handlesucursal={handlesucursal}
          obtenerServicios={obtenerServicios} serviciosSucursalState={serviciosSucursalState}/>}/>
        </Routes>
      </Router>
    </>
    );
}

export default App;