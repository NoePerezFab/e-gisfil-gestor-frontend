import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTabContent, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useEffect, useRef, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Menu from './Menu';

const ServiciosSucursal = ({obtenerSucursales,sucursalesState,obtenerServicios,
                            handlesucursal,sucursalState,serviciosmostradosState }) => {

 
  
  useEffect(() => {
    obtenerSucursales()
    obtenerServicios()
  }, [])
  
  const agregarServicio = async (event) =>{
     const agregarservicio = { sucursal : { id : sucursalState.id}, 
                               servicio : { id : event.currentTarget.dataset.index},                    
                             }
    const bodyJson = JSON.stringify(agregarservicio)
    const response = await fetch('../../../gestor/api/addserviciosucursal',{ 
        headers : { 'Content-Type': 'application/json' },
        method: 'POST',
        mode: 'cors', 
        body : bodyJson,
        cache: 'default',
      })
      const responseJson = await response.json()
      await obtenerSucursales()
      handlesucursal({target : { value : sucursalState.id}})
      
    }
  
 
  return (
    
    <>
      <Menu/>
      <MDBContainer className='h-100 mt-5 pt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol >
                    <form >
                    <label className="col-sm-2 control-label" ><h1>Sucursales</h1></label>
                         <select className='custom-select mb-5' name="estado" id="select-sucursal" onInput={handlesucursal}>
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
                            <th scope='col'>Ponderaci??n</th>
                            <th scope='col'>Tiempo m??ximo de espera</th>                            
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
                            <th scope='col'>Ponderaci??n</th>
                            <th scope='col'>Tiempo m??ximo de espera</th>
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

