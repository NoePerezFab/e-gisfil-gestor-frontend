import React from 'react'
import gisnetLogo from '../images/gisnetLogo.png'
import {
    Link, useNavigate
}from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();


    return (
        <header>
           <nav  className="navbar navbar-expand-lg navbar-dark  bg-primary " >
            <div className="container-fluid d-flex  align-items-end">
                <img src={gisnetLogo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top mr-1" />
                <h2 className="mr-auto  ml-2">e-Gestor</h2>   
                <ul className='navbar-nav ml-auto'>
                <li className='nav-item'> 
                <Link to="/Login" className='nav-link'>Inicio</Link>
                </li>
                <li>
                <Link to="/registrarsucursal" className='nav-link'>Registro Sucursal</Link>
                </li>
                <li className='nav-item'>
                <Link to="/registrarservicio" className='nav-link'> Registro Servicios</Link>
                </li>
                <li className='nav-item'>
                <Link to="/registrarserviciosucursal" className='nav-link'> Registro de Servicios a Sucursal</Link>
                </li>
                <li className='nav-item'>
                <Link to="/registrarsucursalv2" className='nav-link'> Registro de Servicios a Sucursal v2</Link>
                </li>
                </ul>  
                </div>
            </nav>
        </header>

    )
}

export default Menu
