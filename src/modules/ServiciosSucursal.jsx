import { MDBCol, MDBContainer, MDBRow, MDBTabContent, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useState } from 'react';
import Menu from './Menu';

const ServiciosSucursal = () => {


  var url = "http://192.168.200.216:8084/gestor/api/sucursales"
  fetch(url, {
      method: 'GET', // or 'PUT'
      mode:'cors',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => mostrarData(data))

    const mostrarData = (data)=> {
      console.log(data)
      let sucursal=''
      for (let i = 0; i < data.length; i++) {
        sucursal += `<option>${data[i].nombre}</option>`;
        
      }
      document.getElementById('select-estado').innerHTML = sucursal
    }
    


  
  return (
    <>
      <Menu/>
      <MDBContainer className='h-100 mt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol >
                    <form >
                    <label className="col-sm-2 control-label" >Sucursales</label>
                         <select className='custom-select mb-5' name="estado" id="select-estado" >
                            <option value="">Elige tu Sucursal</option>
                        </select>
                        <p></p>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th scope='col'>Clave</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Prioridad</th>
                            <th scope='col'>Servicio al cliente</th>
                            <th scope='col'>Tipo de servicio</th>
                          </tr>
                        </MDBTableHead>
                      
                      <MDBTableBody>
                      <tr>
                       <th scope='row'>123456</th>
                       <td>asdfaa</td>
                       <td>1</td>
                       <td>Si</td>
                       <td>Caja</td>
                      </tr>
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
