import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { useState, useRef, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
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
        setindllamadoState(e)
    }
    const intervalRef = useRef() 
    const [red, setred] = useState(false)
    const [time, settime] = useState(0)

    const [direccionState,setdireccionState]=useState('')
    const handledireccion = (e) =>{
        setdireccionState(e)
    }

    const [ClaveDireccionState,setClaveDireccionState]=useState('')
    const handleClaveDireccion = (e) =>{
        setClaveDireccionState(e)
    }
    const [CalleState,setCalleState]=useState('')
    const handleCalle = (e) =>{
        setCalleState(e)
    }
    const [numeroExtState,setnumeroExtState]=useState('')
    const handlenumeroExt = (e) =>{
        setnumeroExtState(e)
    }
    const [numeroIntState,setnumeroIntState]=useState('')
    const handlenumeroInt = (e) =>{
        setnumeroIntState(e)
    }
    const [UrlState,setUrlState]=useState('')
    const handleUrl = (e) =>{
        setUrlState(e)
    }

    const [coloniaState,setcoloniaState]=useState('')
    const [estadoState,setestadoState]=useState('')
    const [cpState,setcpState]=useState('')
    const [municipioState,setmunicipioState]=useState('')

    const agregarSucursal = async () =>{
        const sucursal = {clave : claveState, nombre : nombreState, 
                           telefono : null, ind_llamado : indllamadoState}
        console.log(sucursal)
        const bodyJson = JSON.stringify(sucursal)
        console.log(bodyJson)
        const response = await fetch('http://192.168.200.216:8084/gestor/api/addsucursal',{ 
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
/*const obtenerColonia = async () =>{
    const response = await fetch('http://192.168.200.216:8084/gestor/api/getcolonia',{ 
       // headers : { 'Content-Type': 'application/json' },
        method: 'GET',
        mode: 'cors', // 
        //body : bodyJson,
        cache: 'default',
      })
      
}
useEffect(() => {
    fetch('http://192.168.200.216:8084/gestor/api/colonias')
      .then((response) => {
        return response.json()
      })
      .then((estado) => {
        estado(estado)
      })
  }, [])*/
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
                    <label className="col-sm-2 control-label">Direccion</label>
                    <label className="col-sm control-label">Código Postal</label>
                        <MDBInput  icon='phone-alt'  getValue={""} type='text'/>      
                    <label className="col-sm-2 control-label">Clave</label>
                        <MDBInput  icon='phone-alt'  getValue={handleClaveDireccion} type='text'/>      
                    <label className="col-sm-2 control-label">Calle</label>
                        <MDBInput  icon='phone-alt'  getValue={handleCalle} type='text'/>  
                    <label className="col-sm-2 control-label">Número exterior</label>
                        <MDBInput  icon='phone-alt'  getValue={handlenumeroExt} type='text'/>  
                    <label className="col-sm-2 control-label">Número interior</label>
                        <MDBInput  icon='phone-alt'  getValue={handlenumeroInt} type='text'/>    
                    <label className="col-sm-2 control-label">Colonia</label>
                        <MDBInput  icon='phone-alt'  getValue={""} type='text'/>                 
                    <label className="col-sm-2 control-label">Estado</label>
                        <MDBInput  icon='phone-alt'  getValue={""} type='text'/>                 
                    <label className="col-sm-2 control-label">Municipio</label>
                        <MDBInput  icon='phone-alt'  getValue={""} type='text'/>                  
                    <label className="col-sm-2 control-label">URL</label>
                        <MDBInput  icon='phone-alt'  getValue={handleUrl} type='text'/>  
         
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
