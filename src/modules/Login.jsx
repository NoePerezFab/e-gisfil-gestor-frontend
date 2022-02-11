import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React,{ useState,useRef }  from 'react';


import Menu from './Menu';

const Login = () => {

/*
    var url = "http://192.168.200.216:8084/gestor/api/colonias"
    fetch(url, {
        method: 'GET', // or 'PUT'
        mode:'cors',
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        
      this.listaCP=  response.map((cp)=>{
          
        console.log("Prueba",cp);  
          <option>{cp} </option>
        } )
      }); */
      
      //.then(response => console.log(response)); 
     /* const listaCp = listaCP.map( (e) =>

      );*/
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
      <option>{number}</option>
      );
    /* fetch('http://192.168.200.216:8084/gestor/api/colonias')
     .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response)); 
      */
     /* const obtenerColonia = async () =>{
        const response = await fetch('http://192.168.200.216:8084/gestor/api/getcolonia',{ 
           // headers : { 'Content-Type': 'application/json' },
            method: 'GET',
            mode: 'cors', // 
            //body : bodyJson,
            cache: 'default',
          })}

          const [coloniaSelect,setcoloniaSelect] = useState("")
          const handleColoniaSelect = (e) => {
            setcoloniaSelect(e.target.value)
          }

          <select className='custom-select mb-5' name="estado" id="select-estado" >
                            <option value="">Elige tu Cp</option>
                            { 
                            listaCP                              
                            }
                        </select>

       */   
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
                         <MDBInput getValue={handlecodigoPostal}  type='text'/>
                                                 
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
