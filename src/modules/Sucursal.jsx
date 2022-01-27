import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { useState, useRef } from 'react';
import Menu from './Menu';

const Sucursal = () => {
    const [claveState,setclaveState]=useState('')
    const handleClave = (e) =>{
        setclaveState(e)
    } 
    const [nombreState,setnombreState]=useState('')
    const handleNombre = (e) =>{
        setnombreState(e)
    }
    const [telefonoState,settelefonoState]=useState('')
    const handleTelefono = (e) =>{
        settelefonoState(e)
    }
    const [indllamadoState,setindllamadoState]=useState(1)
    const handleindllamado = (e) =>{
        settelefonoState(e)
    }
    const intervalRef = useRef() 
    const [red, setred] = useState(false)
    const [time, settime] = useState(0)
    
    const agregarSucursal = async () =>{
        const sucursal = {clave : claveState, nombre : nombreState, 
                           telefono : null, ind_llamado : indllamadoState}
        console.log(sucursal)
        const bodyJson = JSON.stringify(sucursal)
        console.log(bodyJson)
        const response = await fetch('http://192.168.200.216:8080/gestor/api/addsucursal',{ 
            headers : { 'Content-Type': 'application/json' },
            method: 'POST',
            mode: 'cors', // 
            body : bodyJson,
            cache: 'default',
          })
        const responseJson = await response.json()
        console.log(responseJson);
        
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
                     <label className="col-sm-2 control-label">Clave</label>
                    <div className="grey-text">
                        <MDBInput  icon="user" getValue={handleClave} type='text'/>
                     <label className="col-sm-2 control-label">Nombre</label>
                        <MDBInput  icon='user-alt' getValue={handleNombre} type='text'/>
                    <label className="col-sm-2 control-label">Teléfono</label>
                        <MDBInput  icon='phone-alt' getValue={handleTelefono} type='number'/>
                    <label className="col-sm-2 control-label">Ind_llamado</label>
                        <MDBInput  icon='phone-alt' valueDefault={"1"} getValue={handleindllamado} type='text'/>                  
                    <div className="d-flex justify-content-center align-items-center flex-column mt-5 ">
                        <button type="button" onClick={agregarSucursal} className="btn-default btn Ripple-parent" style={{background:"#0D7E61",color:"white",fontSize:"3rem"}}  >Agregar Sucursal</button>     
                    </div>
                    </div>
                    </form>
                </MDBCol>
            </MDBRow>
    </MDBContainer>
    </>
)
};

export default Sucursal;
