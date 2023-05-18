import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersistentDrawerLeft from '../components/Drawer'
import Registros from '../pages/Registros'
import Home from '../pages/Home'
import Analise from '../pages/Analise'
import Painel from '../pages/Painel'
import Login from '../pages/Login'
import Registrar from '../pages/Registrar'
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PersistentDrawerLeft><Home /></PersistentDrawerLeft>} />
                <Route path='/registros' element={<PersistentDrawerLeft><Registros /></PersistentDrawerLeft>} />
                <Route path='/registros/:id' element={<PersistentDrawerLeft><Analise /></PersistentDrawerLeft>} />
                <Route path='/painel' element={<PersistentDrawerLeft><Painel /></PersistentDrawerLeft>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Registrar />} />
            </Routes>
        </BrowserRouter>
    )
}