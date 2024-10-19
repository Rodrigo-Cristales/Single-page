import React from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'; 
import { Footeer } from './Footeer'


export function Form_register() {

const navigate = useNavigate();

const {register, handleSubmit, 
  watch, formState : {errors}, reset } = useForm();

const onSubmit = handleSubmit((data) => {
  console.log('Datos registrados :', data);

  localStorage.setItem('user', JSON.stringify(data));
/*Limpio el formulario una vez se envien los datos*/
  reset()
  /*Si el formulario no tiene ningun error en la validacion, este lo redirige a la primera vista*/
  navigate('/')

})

return (
    <div>
      <section> 
        <h1 className='titulo__principal'>CREA TU CUENTA EN KODIGO MUSIC</h1>
    <form className='Fomr_register' onSubmit = {onSubmit}>

        <h2 className='Kodigo__Music'>REGISTRATE EN KODIGO MUSIC</h2>
        
        <label>Ingresar nombre</label> 
        <input type="text" placeholder='Ingresar nombre' {...register('Nombre', {
          required : {
            value : true,
            message : "El campo nombres no puede quedar vacio"
        }
      })}/> 
          {
            errors.Nombre && <span className='Errors'>{errors.Nombre.message}</span>
          }
            
        <label htmlFor="">Ingrese Apellidos</label>
        <input type="text" placeholder='Ingrese sus apellidos' {...register("Apellidos", {
          required:{
            value : true,
            message : "El campo apellidos no puede quedar vacio"
          }

        })} />
        {
          errors.Apellidos && <span className='Errors'>{errors.Apellidos.message}</span>
        }



        <label htmlFor="">Ingrese su correo</label>
        <input type="email" placeholder='emial@2024' {...register('Email', {
          required:{
            value : true,
            message : "El campo de correo no puede quedar vacio" 
          }
        })}/> 

          {
            errors.Email && <span className='Errors'>{errors.Email.message}</span>
          }
        <label htmlFor="">Ingrese su contraseña</label>

        <input type="password" placeholder='Contraseña' {...register('Password', {
          required:{
              value : true,
              message : "El campo contraseña no puede quedar vacio"
        },
          minLength:{
            value : 8,
            message: "La contraseña debe de tener minimo un 8 caracteres"
          }
        })}
        />
        {
          errors.Password &&  <span className='Errors'>{errors.Password.message}</span>
        }
        {/*Validacion del Password*/}
        <label htmlFor="">Confirme su contraseña</label>
        <input type="password" placeholder='Contraseña' {...register("ConfirmarPassword", {
          required: {
          value: true,
          message: "Debe de confirmar su contraseña es obligatorio"
        },
        validate: (value) => value === watch ('Password') || 'Las contrañas deben de coincidir'
      })}
        />
        {
          errors.ConfirmarPassword && <span className='Errors'>{errors.ConfirmarPassword.message}</span>
        }
        <button type='submit' className='Crear__Cuenta'>Crear cuenta</button> 

        {/*Le permite al usuario a regresar a la primera vista si asi lo desea*/}
        <button className='Crear__Cuenta Modificador__Button'><Link to={'/'} className='Link__registros'>Regresar</Link></button>       
        </form>
        <footer>
          <Footeer/>
        </footer>
      </section>
      
    </div>
  )
}

