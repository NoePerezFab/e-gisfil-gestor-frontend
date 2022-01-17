import React from 'react'
import gisnetLogo from '../media/gisnetLogo.png'

function Servicios() {
    return (
        <>
        <header>
            <nav className="navbar navbar-dark bg-primary fixed-top d-flex">
                <div className="container-fluid d-flex  align-items-end">
                <img src={gisnetLogo.png} alt="Logo de GISNET" width="50" height="50" className="d-inline-block align-text-top mr-1" />
                <h2 className="mr-auto  ml-2">e-Gestor</h2>     
                </div>
            </nav>
        </header>

        <div className="container">
        <center><h2>Registro de Servicios</h2></center>
  <form className="form-horizontal">
    <div className="form-group">
      <label className="col-sm-2 control-label">Id</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'Servicios_CC'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Clave</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Nombreinput" type="text" defaultValue={'CC'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Nombre</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'Nombre'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Tipo de Servicio</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'Caja'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Prioridad</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'1'}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">Servicio al cliente</label>
      <div className="col-sm-10">
      <input className="form-control validate"  id="Claveinput" type="text" defaultValue={'true'}/>
      </div>
    </div>
  </form>
</div>
       
        </>
    )
}

export default Servicios
