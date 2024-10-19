import React from 'react'
import Mana from '../../assets/imagenes/Mana.jpg'
import Temerarios from '../../assets/imagenes/Los temerarios.jpg'
import Carin from '../../assets/imagenes/Carin leon.jpg'
import RadioG from '../../assets/imagenes/RadioG.jpg'
import Volando from '../../assets/imagenes/Volando.jpg'
import '../../Styles/Emisores.css';

export function Emisores() {
  return (
    <div>
        <h2 className='titulo_contenido'>Emisores populares</h2>

        <section className='Contenido__principal'>
                    <article className='Modificador__cajas'>
                        <img src={Mana} alt="Mana" className='imagenes__modificador'/>
                        <h4>Mana</h4>
                        <p>Artista de musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Temerarios} alt="Temearios" className='imagenes__modificador' />
                        <h4>Temerarios</h4>
                        <p>Artista de musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Carin} alt="Carin" className='imagenes__modificador' />
                        <h4>Carin</h4>
                        <p>Artista de musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={RadioG} alt="RadioG" className='imagenes__modificador' />
                        <h4>Radio G</h4>
                        <p>Artista det musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Volando} alt="Volando" className='imagenes__modificador'/>
                        <h4>Volando</h4>
                        <p>Artista det musica</p>
                    </article>
                    
            
            </section>
    </div>
)
}
