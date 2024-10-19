import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Navbar.css'
import Home from '../../assets/Home.svg'
export function Navbar() {
  return (
    <div>
        <header className='header'>
        <nav className='navbar__modificador'>
            <div className='navbar-container'>
                <span className='navbar-brand'>
                <img className='Home__svg' src={Home} alt="Imagen Home"/>
                <h2 className='nabvar__kodigo'>KODIGO MUSIC</h2>
                </span>
                    <div className='links'>
                        <Link className='Link__Inicios' to="/registros">Registrarse</Link>
                        <Link to= "/sesiones" className='Link__Inicios'>Inicar sesion</Link>
                    </div>
            </div>
</nav>
        </header>
    </div>
)
}
