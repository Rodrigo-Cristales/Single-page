import React, { useState } from 'react'
import Apple from '../../assets/Apple.svg'
import Facebook from '../../assets/facebook.svg'
import Google from '../../assets/google.svg'
import { Footeer } from './Footeer'
/**/
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

export function Fomr_InicioSesiones() {

const navigate = useNavigate();

const {
    register, 
    handleSubmit,
    formState : {errors}
} 
= useForm();

const [loginError] = useState('')

const onSubmit = (data) =>{
    const saveUser = JSON.parse(localStorage.getItem('user'));
    {/*Hago una validacion para comprobar que los datos sean iguales al registro de sesion*/}
    if (saveUser && saveUser.Email === data.Email && saveUser.Password === data.Password){
            console.log("Inicio de sesion exitosos")
            navigate('/')
    }else{
        console.log( 'Error : ','Correo o contraseña incorrectas'); {/*Se muestra mensaje en consola, 
                                                                    si los datos de incio de sesion no coidicen con ninguna 
                                                                    cuenta registrada*/}
    }
}
return (
    <div>
        <section>
            <h1 className='titulo__principal Modificador--titulo'>INICIAR SESION EN KODIGO MUSIC</h1>

            <form className='Fomr_register' onSubmit={handleSubmit(onSubmit)}>                    
                <h2 className='Kodigo__Music'>INICIAR SESION</h2>
                <article>

                    {/*Estos botones son decorativos no tienen ninguna funcionalidad*/}
                    <button className='Tipos_de_sesiones'><span><img src={Google} alt="Inicio de sesion con Google" className='Inicio__Imagenes'/></span><span className='Modificador__texto'>Continuar con Google</span></button>
                    <button className='Tipos_de_sesiones'><span><img src={Facebook} alt="Inicio de sesion con Facebook" className='Inicio__Imagenes2' /></span><span className='Modificador__texto'>Continuar con Facebook</span></button>
                    <button className='Tipos_de_sesiones'><span> <img src={Apple} alt="Inicio de sesion con Apple" className='Inicio__Imagenes3' /></span><span className='Modificador__texto'>Continuar con Apple</span></button>
                </article>

                {/*Validaciones para los campos del formulario*/}

                <label>Ingresar correo</label>
                <input type="email" placeholder='@email' {...register ('Email', {
                    required : {
                    value : true,
                    message : "El campo de correo no puede quedar vacio"
                }
            })} />
                {
                    errors.Email && <span className='Errors'>{errors.Email.message}</span>
                }
                <label htmlFor="">Ingresar contraseña</label>
                <input type="password" placeholder='Contraseña' {...register ('Password', {
                    required: {
                        value : true,
                        message : "El campo de contraseña no puede quedar vacio"
                }})}/>
                    {
                        errors.Password && <span className='Errors'>{errors.Password.message}</span>
                    }

                <button type='submit' className='Crear__Cuenta'>Iniciar sesion</button>

        {/*Si el usuario quiere regresar a la primera vista lo puede hacer atraves de este boton*/}
                <button className='Crear__Cuenta Modificador__Button'><Link to="/" className='Link__registros'>Regresar</Link></button>   
                {loginError && <span>{loginError}</span>}        
            </form>
        </section>
        <footer>
            <Footeer/>
        </footer>
    </div>
)
}
