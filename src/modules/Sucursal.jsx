import { MDBCloseIcon, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from 'mdbreact';
import React, { useState, useRef, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
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
     
        const sucursal = {clave : claveState, nombre : nombreState, 
                           direccion : 
                            {
                                clave: ClaveDireccionState, calle : CalleState,
                                num_ext: numeroExtState, num_interior: numeroIntState,
                                colonia : coloniaEnvio, estado : estadoEnvio,
                                municipio : municipioEnvio, cp : codigoPostalState, 
                                url : UrlState
                            },
                            telefono : metadatos, ind_llamado : indllamadoState,  
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
    setspinnerState(true);
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

                        const [metadatos, setmetadatos] = useState([])
                        const handleMetadatos = (e)=>{
                            setmetadatos(e.metadatos)
                        }

                        const handleTelefonoMetadato =(e) =>{
                            let telefonos=metadatos;
                            telefonos[e.target.id]=e.target.value
                            setmetadatos=telefonos;
                        }
                        
                        const addMetadato = async (e)=>{
                            e.preventDefault()
                            const metadato=""
                            setmetadatos([...metadatos,metadato])
                        }                        
                        let indice=-1;
                
        const [spinner,setspinnerState]=useState(false)


  return (
    <>
    <Menu/>
    <MDBContainer className='h-100 mt-5'>
            <MDBRow className='h-100 d-flex justify-content-center align-items-center ml-5'>
                <MDBCol >
                    <form >                     
                    <div className="grey-text">
                    <MDBIcon icon="key" /><label className="col-sm-2 control-label">Clave</label>  
                        <MDBInput   getValue={handleClave} type='text'/>
                        <MDBIcon icon="user-alt" /><label className="col-sm-2 control-label">Nombre</label>
                        <MDBInput   getValue={handleNombre} type='text'/>
                    <MDBIcon icon="map-marked-alt" /><label className="col-sm-2 control-label">Direccion</label>
                    <label className="col-sm control-label"><MDBIcon icon="key" /> Clave</label> 
                        <MDBInput getValue={handleClaveDireccion} type='text'/>  
                    <label className="col-sm control-label"><MDBIcon icon="location-arrow" /> Código Postal</label>
                        <MDBInput getValue={handlecodigoPostal} onBlur={agregarCodigoPostal} type='text'/> 
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
                        :
                        spinner ?
                        <>
                        <div className="spinner-border" role="status"/>
                        <label className="col-sm-2 control-label"><h4>Cargando</h4></label>                                              
                        
                        </>:<></>
                    }
                    <p/><p/>   
                    <label className="col-sm-2 control-label"><MDBIcon icon="street-view" /> Calle</label>
                        <MDBInput  getValue={handleCalle} type='text'/>  
                    <label className="col-sm control-label"><MDBIcon icon="hashtag"/> Número exterior</label>
                        <MDBInput  getValue={handlenumeroExt} type='text'/>  
                    <label className="col-sm control-label"><MDBIcon icon="hashtag"/> Número interior</label>
                        <MDBInput  getValue={handlenumeroInt} type='text'/> 
                   
                    <label className="col-sm-2 control-label"> <MDBIcon icon="link"/> URL</label>
                        <MDBInput  getValue={handleUrl} type='text'/>  
                    
                        {
                    
                        metadatos.length>0 ? metadatos.map(()=>{
                            indice=indice+1
                            return (
                                <>
                                <label className="col-sm-2 control-label"><MDBIcon icon="phone-alt" /> Teléfono</label>
                                <MDBInput  group type='text' validate error='wrong' required
                                success='right' onInput={handleTelefonoMetadato} id={""+indice} />                    
                                </>
                            )
                        }):<p></p>

                        }
                        <label className="col-sm control-label">
                        <MDBBtn className='btn btn primary' onClick={addMetadato}><MDBIcon icon="plus"/> Agregar Teléfono</MDBBtn>
                        </label>
                        

                        <label className="col-sm-2 control-label"><MDBIcon icon="hashtag"/> Ind_llamado</label>
                        <MDBInput valueDefault={"1"} getValue={handleindllamado} type='text'/>  
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
