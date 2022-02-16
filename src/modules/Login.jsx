import { MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdbreact';
import React,{ useState,useRef }  from 'react';


import Menu from './Menu';

const Login = () => {

      const intervalRef = useRef() 
      const [red, setred] = useState(false)
      const [time, settime] = useState(0)

      const [codigoPostal,setcodigoPostalState] = useState('');
      const handlecodigoPostal = (e) =>  {
        setcodigoPostalState(e)
      }


      const [estadosState,setestadosState] = useState("");
      const [municipioState,setmunicipioState] = useState("");
      const [coloniaState,setcoloniaState] = useState("");
      let  estado,municipio,estadoText,municipioText,colonia,selectColonia;

          const agregarCodigoPostal = async () =>{
            const codigopostal = { cp : codigoPostal }
            console.log(codigopostal)
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
            estadoText= estado[0]
            document.getElementById('Estados').value = estadoText

            municipio = responseJson.map((municipios) => {
              return municipios.municipio
            });
            municipioText= municipio[0]
            document.getElementById('municipio').value = municipioText

            colonia = responseJson.map((colonias) => {
              return colonias.nombre
            });
            selectColonia= `<option>Elige una colonia</option>`;
            for (let i = 0; i < colonia.length; i++) {
              selectColonia += `<option>${colonia[i]}</option>`;
            }
          //  console.log(selectColonia)
            document.getElementById('select-colonia').innerHTML = selectColonia

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
                    
                    <label className="col-sm-2 control-label" >CP</label>
                         <MDBInput getValue={handlecodigoPostal} onBlur={agregarCodigoPostal} type='text'/>
                                                 
                    <label className="col-sm-2 control-label" >Estados</label>
                    <MDBInput   disabled={true} id="Estados" type='text'/>
                    <label className="col-sm-2 control-label" >Municipios</label>                        
                    <MDBInput   disabled={true} id="municipio" type='text'/>                         
                        <p></p>
                        <label className="col-sm-2 control-label" >Colonia</label>
                        <select className='custom-select mb-5' name="colonia" id="select-colonia">
                          <option value="">Elige una Colonia</option>
                        </select>
                        <p></p>                       
                        <div className="d-flex justify-content-center align-items-center flex-column mt-5 ">
                        <button type="button" onClick={agregarCodigoPostal} className="btn-default btn Ripple-parent" style={{background:"#0D7E61",color:"white",fontSize:"3rem"}}  >Agregar Sucursal</button>     
                    </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </>
  )
};

export default Login;
