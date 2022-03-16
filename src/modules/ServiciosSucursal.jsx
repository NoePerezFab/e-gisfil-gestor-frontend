import { MDBCol, MDBContainer, MDBRow, MDBTabContent, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useRef, useState } from 'react';
import Menu from './Menu';

const ServiciosSucursal = () => {


  let claves,nombres, prioridades, serviciosalcliente, tiposdeservicio,sucursales;
    const [sucursal,setsucursalState]=useState("")
    const intervalRef = useRef() 
    const [red, setred] = useState(false)
    const [time, settime] = useState(0)

    const handlesucursal = (e) => {
      setsucursalState(e.target.value)
    }

    const obtenerSucursales = async () =>{
      const response = await fetch('http://192.168.200.216:8084/gestor/api/sucursales',{ 
          headers : { 'Content-Type': 'application/json' },
          method: 'GET',
          mode: 'cors', 
          cache: 'default',
        })
      const responseJson = await response.json()
      console.log(responseJson);
      
      let Sucursal=''
      for (let i = 0; i < responseJson.length; i++) {
        Sucursal += `<option>${responseJson[i].nombre}</option>`;
      }
      document.getElementById('select-sucursal').innerHTML = Sucursal

      clearInterval(intervalRef.current)
      setred(true)
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
      console.log(responseJson);
      
      let servicios=''
      for (let i = 0; i < responseJson.length; i++) {
        servicios += `<tr>`; 
        servicios += `<th scope='row'>${responseJson[i].clave}</th>`;
        servicios += `<td>${responseJson[i].nombre}</td>`;
        servicios += `<td>${responseJson[i].prioridad}</td>`;
        if(responseJson[i].servicio_cliente==true){
          servicios += `<td>Si</td>`;
        }else{
          servicios += `<td>No</td>`;
        }
        servicios += `<td>${responseJson[i].tipo_servicio}</td>`;
        servicios += `</tr>`;
      }
      document.getElementById('datos').innerHTML = servicios

      clearInterval(intervalRef.current)
      setred(true)
}
    
  return (
    
    <>
      <Menu/>
      <MDBContainer className='h-100 mt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol >
                    <form >
                    <label className="col-sm-2 control-label" ><h1>Sucursales</h1></label>
                         <select className='custom-select mb-5' name="estado" id="select-sucursal"
                          onInput={handlesucursal} onClick={obtenerSucursales} onChange={obtenerServicios}>
                            <option value="">Elige tu Sucursal</option>
                        </select>
                        <p></p>
                        <label className="col-sm control-label" ><h3>Servicios con los que cuenta la sucursal</h3></label>
                      <MDBTable>
                        <MDBTableHead>


                        </MDBTableHead>
                        <MDBTableBody>
                          
                        </MDBTableBody>
                      </MDBTable>
                      <label className="col-sm control-label" ><h3>Servicios existentes</h3></label>
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
                      <MDBTableBody id='datos'/>
                      </MDBTable>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </>
  )
};

export default ServiciosSucursal;
