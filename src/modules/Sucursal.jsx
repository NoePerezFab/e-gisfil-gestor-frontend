import { MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdbreact';
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
    const [codigoPostalState,setcodigoPostalState] = useState('');
      const handlecodigoPostal = (e) =>  {
        setcodigoPostalState(e)
      }
    const [coloniaState,setcoloniaState] = useState([]);
    
    const handlecolonia = (e) =>  {
        setcoloniaState(e.target.value)
      }
      const [estadoState,setestadoState]=useState('')
      const handleestado = (e) =>  {
          setestadoState(e.target.value)
        }
      const [municipioState,setmunicipioState]=useState('')
      const handlemunicipio = (e) =>  {
          setmunicipioState(e.target.value)
        }

      const [coloniaEnvio,setcoloniaEnvioState]=useState();
      const handlecoloniaenvio = (e) =>  {
        setcoloniaEnvioState(e.target.value)
      }
      const [estadoEnvio,setestadoEnvioState]=useState();
      const handleestadoaenvio = (e) =>  {
        setestadoEnvioState(e.target.value)
      }
    const [municipioEnvio,setmunicipioEnvioState]=useState();
    const handlemunicipioenvio = (e) =>  {
        setmunicipioEnvioState(e.target.value)
      }


    const agregarSucursal = async () =>{
        let telefonos=[telefonoState];
        const sucursal = {clave : claveState, nombre : nombreState, 
                           direccion : 
                            {
                                clave: ClaveDireccionState, calle : CalleState,
                                num_ext: numeroExtState, num_interior: numeroIntState,
                                colonia : coloniaEnvio, estado : estadoEnvio,
                                municipio : municipioEnvio, cp : codigoPostalState, 
                                url : UrlState
                            },
                            telefono : telefonos, ind_llamado : indllamadoState,  
                         }
        console.log(sucursal)
        const bodyJson = JSON.stringify(sucursal)
        console.log(bodyJson)
        const response = await fetch('http://192.168.200.216:8084/gestor/api/addsucursal',{ 
            headers : { 'Content-Type': 'application/json' },
            method: 'POST',
            mode: 'cors', 
            body : bodyJson,
            cache: 'default',
          })
        const responseJson = await response.json()
        console.log(responseJson);
        
        clearInterval(intervalRef.current)
        setred(true)
}

let  estado,municipio,colonia,selectColonia,selectestado,selectmunicipio;

const agregarCodigoPostal = async () =>{
    const codigopostal = { cp : codigoPostalState }

    const bodyJson = JSON.stringify(codigopostal)
    console.log(bodyJson)
    const response = await fetch('http://192.168.200.216:8084/gestor/api/getcolonia',{ 
        headers : { 'Content-Type': 'application/json' },
        method: 'POST',
        mode: 'cors', // 
        body : bodyJson,
        cache: 'default',
      })
    const responseJson = await response.json()
    console.log(responseJson);
    
    estado = responseJson.map((estados) => {
      return estados.estado
    });

    municipio = responseJson.map((municipios) => {
      return municipios.municipio
    });

    colonia = responseJson.map((colonias) => {
      return  colonias.nombre
    });

    setestadoState (estado);
    setmunicipioState(municipio);
    setcoloniaState(colonia);

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
                    <label className="col-sm-2 control-label">Direccion</label>
                    <label className="col-sm control-label">Clave</label>
                        <MDBInput  icon='phone-alt'  getValue={handleClaveDireccion} type='text'/>  
                    <label className="col-sm control-label">Código Postal</label>
                        <MDBInput getValue={handlecodigoPostal} onBlur={agregarCodigoPostal} type='text'/>     
                    <label className="col-sm-2 control-label">Calle</label>
                        <MDBInput  icon='phone-alt'  getValue={handleCalle} type='text'/>  
                    <label className="col-sm-2 control-label">Número exterior</label>
                        <MDBInput  icon='phone-alt'  getValue={handlenumeroExt} type='text'/>  
                    <label className="col-sm-2 control-label">Número interior</label>
                        <MDBInput  icon='phone-alt'  getValue={handlenumeroInt} type='text'/> 
                    {
                     coloniaState.length>0?  
                   <> <label className="col-sm-2 control-label">Colonia</label>
                        <select className='custom-select mb-5'  name="colonia"  onChange={handlecoloniaenvio} id="select-colonia"> 
                        {
                        coloniaState.map((colonias) => {
                            return (<option>{colonias}</option>)                         
                        })
                        }</select>
                    <label className="col-sm-2 control-label">Estado</label>
                        <select className='custom-select mb-5'  name="estado"  onChange={handleestadoaenvio} id="Estados">
                        <option>Elige un estado</option>
                        <option>{estadoState[0]}</option> </select> 
                    <label className="col-sm-2 control-label">Municipio</label>
                        <select className='custom-select mb-5'  name="municipio" onChange={handlemunicipioenvio} id="municipio">
                        <option>Elige un municipio</option>
                        <option>{municipioState[0]}</option>
                        </select>
                        </>
                        :<>
                        <MDBIcon icon="spinner" />
                        </>
                    }
                    <label className="col-sm-2 control-label">URL</label>
                        <MDBInput  icon='phone-alt'  getValue={handleUrl} type='text'/>  
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
