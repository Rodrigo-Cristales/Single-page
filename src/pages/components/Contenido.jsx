import React from 'react'
import Bad_Bunny from '../../assets/imagenes/bad bunny.jpg';
import Feid from '../../assets/imagenes/feid.jpg';
import Karol from '../../assets/imagenes/Karol g.jpeg'
import Maluma from '../../assets/imagenes/Maluma.jpg'
import Raw from '../../assets/imagenes/Raw.jpg'
import '../../Styles/Contenido.css';


export function Contenido() {
  return (
    <div>
        <h2 className='titulo_contenido'>Artitsas más populares</h2>
            <section className='Contenido__principal'>
                    <article className='Modificador__cajas'>
                        <img src={Bad_Bunny} alt="Bad Bunny" className='modificador__imagenes'/>
                        <h4>Bad Bunny</h4>
                        <p className='Parrafos__modificador'>Artista de musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Feid} alt="Feid" className='modificador__imagenes' />
                        <h4>Feid</h4>
                        <p>Artista de musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Karol} alt="Feid" className='modificador__imagenes' />
                        <h4>Karol G</h4>
                        <p>Artista de musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Maluma} alt="Feid" className='modificador__imagenes' />
                        <h4>Feid</h4>
                        <p>Artista det musica</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Raw} alt="Feid" className='modificador__imagenes' />
                        <h4>Raw Alejandro</h4>
                        <p>Artista det musica</p>
                    </article>
                    
            
            </section>
    </div>
)
}
