import React from 'react'
import Verano from '../../assets/imagenes/Verano.jpg'
import Nadie from '../../assets/imagenes/Nadie sabe.jpg'
import APOOX from '../../assets/imagenes/APOXX.jpg'
import Vice from '../../assets/imagenes/Vice.jpg'
import Mañana from '../../assets/imagenes/Mañana.jpg'
import '../../Styles/Albumes.css';





export function Albumes() {
  return (
    <div>
        <h2 className='titulo_contenido'>Albumes populares</h2>
        <section className='Contenido__principal'>
                    <article className='Modificador__cajas'>
                        <img src={Verano} alt="Verano sin ti" className='modificador--imagenes'/>
                        <h4>Un verano sin Ti</h4>
                        <p>Bad Bunny</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Verano} alt="Nadie" className=' modificador--imagenes' />
                        <h4>Nadie sabe </h4>
                        <p>Bad Bunny</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={APOOX} alt="APOOX" className=' modificador--imagenes' />
                        <h4>FERXXOAPOCALIPSIS</h4>
                        <p>Feid</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Vice} alt="Vice" className=' modificador--imagenes' />
                        <h4>VICE VERSA</h4>
                        <p>Rauw Alejandro</p>
                    </article>
                    <article className='Modificador__cajas'>
                        <img src={Mañana} alt="Manana" className=' modificador--imagenes' />
                        <h4>MAÑANA SERA BONITO</h4>
                        <p>Karol G</p>
                    </article>
                    
        </section>
    </div>
  )
}
