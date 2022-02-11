import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
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
    /* 
    .then(response => {
    /*
      let element = document.getElementById('select-estado')
      element.innerHTML= `
      <option>${response.nombre}</option>
      `;
      console.log(response);
    */


       /*
      let listaSucursales= response.map((sucursal)=>{
      console.log("Pruebas",sucursal.nombre);  
        <option>{sucursal.nombre}</option>
      } )
      
    });
    */ 
 
  
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
  <option>{number}</option>
  );

  
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
                    <label className="col-sm-2 control-label" >Estados</label>
                         <select className='custom-select mb-5' name="estado" id="select-estado" >
                            <option value="">Elige un Estado</option>
                            
                        </select>
                        <p></p>
                    <label className="col-sm-2 control-label" >Municipios</label>
                        <select className='custom-select mb-5' name="municipio" id="select-municipio">
                          <option value="">Elige un Municipio</option>
                          <option></option>
                        </select>
                        <p></p>
                        <label className="col-sm-2 control-label" >Colonia</label>
                        <select className='custom-select mb-5' name="colonia" id="select-colonia">
                          <option value="">Elige una Colonia</option>
                        </select>
                        <p></p>
                       
                        
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </>
  )
};

export default ServiciosSucursal;
