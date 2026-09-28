import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from './pages/Clientes'
import CriarCliente from './pages/CriarCliente'
import EditarCliente from './pages/EditarCliente'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientes/novo" element={<CriarCliente />} />
                <Route path="/clientes/:id/editar" element={<EditarCliente />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App