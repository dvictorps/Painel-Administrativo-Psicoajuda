import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersistentDrawerLeft from '../components/Drawer'
import Registros from '../pages/Registros'
import Home from '../pages/Home'
import Analise from '../pages/Analise'
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PersistentDrawerLeft><Home /></PersistentDrawerLeft>} />
                <Route path='/registros' element={<PersistentDrawerLeft><Registros /></PersistentDrawerLeft>} />
                <Route path='/registros/:id' element={<PersistentDrawerLeft><Analise /></PersistentDrawerLeft>} />
            </Routes>
        </BrowserRouter>
    )
}