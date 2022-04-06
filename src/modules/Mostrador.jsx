
import { MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react'
import Menu from './Menu';

function Mostrador({obtenerSucursales,sucursalesState,sucursalState, handlesucursal}) {

    

    const [claveState,setclaveState]=useState("")
    const handleClave = (e) =>{
        setclaveState(e)
    }
    const [nombreState,setnombreState]=useState('')
    const handleNombre = (e) =>{
        setnombreState(e)
    }
    const [tiposervicioState,settiposervicioState]=useState("")
    const handletiposervicio = (e) =>{       
         settiposervicioState(e.target.value)
    }
    
  const [activoState,setactivoState]=useState("")
  const handleactivo = (e) =>{
      setactivoState(e.target.value)
  }
  useEffect(() => {
    obtenerSucursales()
  }, [])
      const agregarMostrador = async () => {
          const idsucursal = sucursalState.id
          const mostrador = { id : idsucursal ,
                              mostradores : [{
                                clave : claveState, nombre : nombreState, tipo_servicio : tiposervicioState,
                                activo : activoState}]
          }
          const bodyJson = JSON.stringify(mostrador)
          const reponse = await fetch("../../../gestor/api/addmostrador",{
            headers : { 'Content-Type': 'application/json'},
            method: 'POST',
            mode: 'cors', // 
            body : bodyJson,
            cache: 'default',            
          })
          const responseJson = await reponse.json()
      }

    return (
    <>
    <Menu />
    <MDBContainer className='h-100 mt-5 pt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol>
                <form>
                <div className="grey-text">
                <label className="col-sm-2 control-label" ><h1>Sucursales</h1></label>
                         <select className='custom-select mb-5' name="estado" id="select-sucursal"   onInput={handlesucursal}>
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
                    <MDBIcon icon="key" /><label className="col-sm-2 control-label">Clave</label>  
                        <MDBInput   getValue={handleClave} type='text'/>
                    <MDBIcon icon="user-alt" /><label className="col-sm-2 control-label">Nombre</label>
                        <MDBInput   getValue={handleNombre} type='text'/>
                    <MDBIcon icon="tasks" />
                        <label className="col-sm-2 control-label">Tipo de Servicio</label>                   
                            <select className='custom-select mb-5'  name="colonia"   onChange={handletiposervicio}>                            
                          <option>Seleccione el tipo de servicio</option> 
                          <option value={"CAJA"}>CAJA</option>  
                          <option value={"EJECUTIVO"}>EJECUTIVO</option>                                                          
                          
                            </select>
                    <MDBIcon icon="clipboard-check" />
                        <label className="col-sm-2 control-label">Activo</label>                   
                            <select className='custom-select mb-5'  name="colonia"  onChange={handleactivo} > 
                            <option >Seleccione una opción</option>
                                <option value={true}>Activo</option>
                                <option value={false}>Inactivo</option>
                            </select>
                    <div className="d-flex justify-content-center align-items-center flex-column mt-5 ">
                        <button type="button" onClick={agregarMostrador} className="btn-default btn Ripple-parent" style={{background:"#0D7E61",color:"white",fontSize:"1.4rem"}}  >Agregar Mostrador</button>     
                    </div> 
                </div>
                </form>
                </MDBCol>
            </MDBRow>
    </MDBContainer>
    </>
  
    )
}

export default Mostrador