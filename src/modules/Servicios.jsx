import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { useRef, useState } from 'react';
import Menu from './Menu';



const Servicios = () => {
   
    const [nombreState,setnombreState]=useState('')
    const [claveState,setclaveState]=useState('')
    const [prioridadState,setprioridadState]=useState('')
    const [servicioclienteState,setservicioclienteState]=useState('')
    const [tiposervicioState,settiposervicioState]=useState('')
  
   
    const handleNombre = (e) =>{
        setnombreState(e)
    }
    const handleClave = (e) =>{
        setclaveState(e) 
    } 
    const intervalRef = useRef() 
    const [red, setred] = useState(false)
    const [time, settime] = useState(0)

    const handleprioridad = (e) =>{
          setprioridadState(parseInt(e.target.value));
    }

    const handleserviciocliente = (e) =>{
        setservicioclienteState(e.target.value=='Si')
    }
    
    const handletiposervicio = (e) =>{
        settiposervicioState(e.target.value)
    }

 
    
     const agregarServicio = async () =>{
        const servicio = { clave : claveState, nombre : nombreState, prioridad : prioridadState,
                         tipo_servicio : tiposervicioState, servicio_cliente : servicioclienteState}
        console.log(servicio)
        const bodyJson = JSON.stringify(servicio)
        console.log(bodyJson)
        const response = await fetch('http://192.168.200.216:8080/gestor/api/addservicio',{ 
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
                        <MDBInput  icon='user-check' getValue={handleClave}></MDBInput>
                    </div>    
                    <label className="col-sm-2 control-label">Nombre</label>
                    <div className="grey-text">
                        <MDBInput  icon="user-alt" getValue={handleNombre} type='text'></MDBInput>
                    </div>        
                        <label className="col-sm-2 control-label" type='number'>Prioridad</label>
                    <div className="grey-text">
                    <select className='custom-select mb-5' onInput={setprioridadState} onChange={handleprioridad} >
                        <option value="">Selecciona una prioridad</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    </div>     
                    <label className="col-sm-2 control-label">Tipo de Servicio</label>
                    <div className="grey-text">
                    <select  className='custom-select mb-5' onInput={settiposervicioState}  onChange={handletiposervicio} > 
                        <option value="">Selecciona un tipo de servicio</option>
                        <option>CAJA</option>
                        <option>EJECUTIVO</option>
                    </select>
                    </div> 
                    <label className="col-sm control-label">Servicio al cliente</label>
                    <div className="grey-text">
                    <select className='custom-select mb-5' onInput={setservicioclienteState}   onChange={handleserviciocliente} >
                        <option value="">¿El servicio es al cliente?</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column mt-5 ">
                        <button type="button" onClick={agregarServicio} className="btn-default btn Ripple-parent" style={{background:"#0D7E61",color:"white",fontSize:"3rem"}}  >Agregar Servicio</button>     
                    </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
    )
};

export default Servicios;

