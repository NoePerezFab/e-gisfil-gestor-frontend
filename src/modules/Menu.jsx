import React from 'react'
import gisnetLogo from '../images/gisnetLogo.png'
import {
    Link, useNavigate
}from "react-router-dom";
import 'mdbreact/dist/css/mdb.css';

const Menu = () => {
    const navigate = useNavigate();


    return (
        <header className=''  >
           <nav  className="navbar navbar-expand-lg navbar-dark  bg-primary "  >
            <div className="container-fluid d-flex  align-items-end" >
                <img src={gisnetLogo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top mr-1" />
                <h2 className="mr-auto  ml-2">e-GISfil</h2>   
                <ul className='navbar-nav ml-auto'>
                <li className='nav-item '> 
                <Link to="/Login" className='nav-link'><h4>Inicio</h4></Link>
                </li>
                <li>
                <Link to="/registrarsucursal" className='nav-link'><h4>Registro Sucursal</h4></Link>
                </li>
                <li className='nav-item'>
                <Link to="/registrarservicio" className='nav-link'><h4> Registro Servicios</h4></Link>
                </li>
                <li className='nav-item'>
                <Link to="/registrarserviciosucursal" className='nav-link'><h4> Registro de Servicios a Sucursal</h4></Link>
                </li>
                <li className='nav-item'>
                <Link to="/Mostrador" className='nav-link'><h4> Registro de Mostradores</h4></Link>
                </li>
                </ul>  
                </div>
            </nav>
        </header>

    )
}

export default Menu
