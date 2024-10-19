import './Styles/Form.css'
import { Form_register } from './pages/components/Form_register'
import { KodigoMusic } from './pages/Home/kodigoMusic'
import { Fomr_InicioSesiones } from './pages/components/Fomr_InicioSesiones'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/registros' element = {<Form_register/>} />  
    <Route path='/sesiones' element = {<Fomr_InicioSesiones/>}/>   
    <Route index path='/' element = {<KodigoMusic/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
