import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listarClientes } from '../services/clienteService'
import ClienteTable from '../components/ClienteTable'

function Clientes() {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        listarClientes()
            .then(data => {
                setClientes(data.content)
            })
    }, [])

    function removerClienteDaLista(id) {
        setClientes(clientes.filter(cliente => cliente.id !== id))
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-6xl">

                <div className="mb-8 flex items-center justify-between">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Clientes
                        </h1>

                        <p className="mt-1 text-gray-500">
                            Gerencie os clientes cadastrados
                        </p>
                    </div>

                    <Link
                        to="/clientes/novo"
                        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
                    >
                        + Novo cliente
                    </Link>

                </div>

                <div className="overflow-hidden rounded-xl bg-white shadow-sm">

                    <div className="p-6">

                        <ClienteTable
                            clientes={clientes}
                            onClienteExcluido={removerClienteDaLista}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Clientes