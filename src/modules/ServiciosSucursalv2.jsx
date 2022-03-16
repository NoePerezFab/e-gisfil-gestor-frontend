import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { MDBCol, MDBContainer, MDBRow, MDBTabContent, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useRef, useState } from 'react';
import Menu from './Menu';

const ServiciosSucursal = () => {

  const [sucursalesState,setsucursalesState]=useState([])
  const handlesucursales = (e)=>{
    setsucursalesState(e)
  }
  const [sucursalState,setsucursalState]=useState('')
  const handlesucursal = (e) =>{
    const sucursalencontrada= sucursalesState.find((sucursal)=>sucursal.id===e.target.value)
    setsucursalState(sucursalencontrada)
    console.log("----------------------")
    console.log(sucursalencontrada)
  }
  
  const [serviciosSucursalState,setserviciosSucursalState]=useState('')
  const handleserviciosSucursal = (e) =>{
    setserviciosSucursalState(e)
  }
 

  
const obtenerSucursales = async () => {
  const response = await fetch('http://192.168.200.216:8084/gestor/api/sucursales',{
    headers : { 'Content-Type': 'application/json' },
    method: 'GET',
    mode: 'cors', 
  //  body : bodyJson,
    cache: 'default',
  }) 
  const responseJson = await response.json()
  //console.log(responseJson);  
    setsucursalesState(responseJson)
   // console.log(responseJson)

}

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
      <Menu/>
      <MDBContainer className='h-100 mt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol >
                    <form >
                    <label className="col-sm-2 control-label" ><h1>Sucursales</h1></label>
                         <select className='custom-select mb-5' name="estado" id="select-sucursal" onClick={obtenerSucursales} onChange={handlesucursal} onBlur={obtenerServicios} >
                            { sucursalesState.length>0?
                            <>                            
                            {                              
                              sucursalesState.map((sucursal) => {
                                return (<option value={sucursal.id}>{sucursal.nombre}</option>)                         
                                 })
                            }
                            </>:
                            <>                            
                            <option>Elige tu Sucursal</option>
                            </>
                            }                            
                        </select>
                        <p></p>
                        <label className="col-sm control-label" ><h3>Servicios con los que cuenta la sucursal</h3></label>
                      <MDBTable>
                        <MDBTableHead>
                        <tr>
                            <th scope='col'>Clave</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Prioridad</th>
                            <th scope='col'>Servicio al cliente</th>
                            <th scope='col'>Tipo de servicio</th>
                            <th scope='col'>Ponderación</th>
                            <th scope='col'>Tiempo máximo de espera</th>
                            <th scope='col'>Acciones</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {sucursalesState.length>0?
                          <>
                            {
                            
                            }
                          </>:
                          <>
                          </>
                          }
                        </MDBTableBody>
                      </MDBTable>
                      <p></p><p></p>
                      <label className="col-sm control-label" ><h3>Servicios existentes</h3></label>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th scope='col'>Clave</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Prioridad</th>
                            <th scope='col'>Servicio al cliente</th>
                            <th scope='col'>Tipo de servicio</th>
                            <th scope='col'>Ponderación</th>
                            <th scope='col'>Tiempo máximo de espera</th>
                            <th scope='col'>Acciones</th>
                          </tr>
                          </MDBTableHead>
                          <MDBTableBody >
                          
                          {serviciosSucursalState.length>0?
                          <> 
                          
                            {serviciosSucursalState.map((servicio)=>{
                              return (<tr className="table table-borderless">
                              <td>{servicio.clave}</td><td>{servicio.nombre}</td>
                              <td>{servicio.prioridad}</td><td>{servicio.servicio_cliente?"Si":"No"}</td>
                              <td>{servicio.tipo_servicio}</td>
                              <td>{servicio.ponderacion}</td><td>{servicio.tiempo_maximo_espera}</td>
                              </tr>)
                            })
                          }
                          </>
                          :
                          <>
                          </>                            
                           }
                          
                        </MDBTableBody>                      
                      </MDBTable>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </>
  )
};

export default ServiciosSucursal;
