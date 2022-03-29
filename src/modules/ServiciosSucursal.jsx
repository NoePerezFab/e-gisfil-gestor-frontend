import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTabContent, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useRef, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Menu from './Menu';

const ServiciosSucursal = ({obtenerSucursales,sucursalesState,obtenerServicios,serviciosSucursalState}) => {


  const [sucursalState,setsucursalState]=useState(undefined)
  const handlesucursal = (e) =>{
    const sucursalencontrada= sucursalesState.find((sucursal)=>sucursal.id===e.target.value)
    console.log("\\\\\\\\\\\\\\\\\\\\",sucursalencontrada)
    sucursalencontrada.servicios ===null ? 
    setserviciosmostradosState(serviciosSucursalState) :
    setserviciosmostradosState(filtrarservicios(serviciosSucursalState,sucursalencontrada.servicios))
    setsucursalState(sucursalencontrada)
    console.log("----------------------")
    console.log(filtrarservicios(serviciosSucursalState,sucursalencontrada.servicios))
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
  const handleserviciosmostrados =(e)=>{

  }

  const [servicioactualState,setservicioactualState]=useState("")
  const handleservicioactual = (e) =>{
    setservicioactualState(e)
  }
  const handledatos = (e)=>{
    obtenerServicios(e);
    handlesucursal(e)
  }
  
  

 

  const agregarServicio = async (event) =>{
     const agregarservicio = { sucursal : { id : sucursalState.id}, 
                               servicio : { id : event.currentTarget.dataset.index},                    
                             }
    console.log(agregarservicio)
    console.log(event)
    const bodyJson = JSON.stringify(agregarservicio)
    console.log(bodyJson)
    const response = await fetch('http://192.168.200.216:8084/gestor/api/addserviciosucursal',{ 
        headers : { 'Content-Type': 'application/json' },
        method: 'POST',
        mode: 'cors', 
        body : bodyJson,
        cache: 'default',
      })
      const responseJson = await response.json()
      console.log(responseJson)
      await obtenerSucursales()
      handlesucursal({target : { value : sucursalState.id}})
    }
  
 
  return (
    
    <>
      <Menu/>
      <MDBContainer className='h-100 mt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol >
                    <form >
                    <label className="col-sm-2 control-label" ><h1>Sucursales</h1></label>
                         <select className='custom-select mb-5' name="estado" id="select-sucursal" onClick={obtenerSucursales} onChange={handledatos}>
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
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {sucursalState!==undefined?
                          sucursalState.servicios!==null?
                          <>
                            {sucursalState.servicios.map((servicio)=>{
                              return (<tr className="table table-borderless">
                              <td>{servicio.clave}</td><td>{servicio.nombre}</td>
                              <td>{servicio.prioridad}</td><td>{servicio.servicio_cliente?"Si":"No"}</td>
                              <td>{servicio.tipo_servicio}</td>
                              <td>{servicio.ponderacion}</td><td>{servicio.tiempo_maximo_espera}</td>                              
                              </tr>)
                            })
                              
                            }
                          </>:
                          <>
                          </>
                          :<></>
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
                            <th scope='col'>Agregar Servicio</th>
                          </tr>
                          </MDBTableHead>
                          <MDBTableBody >
                          
                          {serviciosmostradosState.length>0?
                          <> 
                          
                            {serviciosmostradosState.map((servicio)=>{
                              return (<tr className="table table-borderless">
                              <td>{servicio.clave}</td><td>{servicio.nombre}</td>
                              <td>{servicio.prioridad}</td><td>{servicio.servicio_cliente?"Si":"No"}</td>
                              <td>{servicio.tipo_servicio}</td>
                              <td>{servicio.ponderacion}</td><td>{servicio.tiempo_maximo_espera}</td>
                              <td><MDBBtn className='btn btn primary' data-index={servicio.id} onClick={agregarServicio}><MDBIcon icon="plus"/></MDBBtn></td>
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
