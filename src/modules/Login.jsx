import React from 'react'


const Login = () => {
    //funciones de preferencia que sean flecha
    return (
        //es donde se regresan los elementos HTML 
        <>
        <header>
            <nav className="navbar navbar-dark bg-primary fixed-top d-flex">
                <div className="container-fluid d-flex  align-items-end">
                <img src="./media/gisnetLogo.png" alt="Logo de GISNET" width="50" height="50" className="d-inline-block align-text-top mr-1"/>
                <h2 className="mr-auto  ml-2">e-Gestor</h2>     
                </div>
            </nav>
        </header>

        <div className="container">
  <h2>Registro de Sucursal</h2>
  <form className="form-horizontal">
    <div className="form-group">
      <label className="col-sm-2 control-label">Clave</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'1234'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Nombre</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Nombreinput" type="text" defaultValue={'Nombre de Sucursal'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Dirección</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'Dirección de la sucursal'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Telefono</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'Telefono'}/>
      </div>
    </div>
  </form>
</div>
       
        </>
    )
}

export default Login
