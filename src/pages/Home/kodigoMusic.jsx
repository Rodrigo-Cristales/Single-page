import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import {Contenido} from '../components/Contenido'
import { Footeer } from '../components/Footeer'
import {Albumes} from '../components//Albumes'
import { Emisores } from '../components/Emisores'

export  function KodigoMusic() {
return (
    <div>
    {/* Menu de navegacion de la pagian*/}
        <Navbar/>

    {/* Muestra parte del contenido de la pagian */}
        <Contenido/>

    {/*Muestra los albumes del contenido de la pagian*/}
    
        <Albumes/>


    {/*Muestra los emisores populares */}

        <Emisores/>

    {/* Muestra el footer de la pagina */}
        <Footeer/>
    </div>
)
}
