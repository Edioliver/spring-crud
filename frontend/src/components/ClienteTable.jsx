import { Link } from 'react-router-dom'
import { excluirCliente } from '../services/clienteService'

function ClienteTable({ clientes, onClienteExcluido }) {

    function handleExcluir(id) {
        excluirCliente(id)
            .then(data => {
                console.log(data)
                onClienteExcluido(id)
            })
    }

    return (
        <div className="overflow-x-auto">

            <table className="w-full text-left">

                <thead>
                <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-sm font-semibold text-gray-500">
                        ID
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-500">
                        Nome
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-500">
                        E-mail
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-500">
                        Telefone
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-500">
                        Ações
                    </th>
                </tr>
                </thead>

                <tbody>
                {clientes.map(cliente => (
                    <tr
                        key={cliente.id}
                        className="border-b border-gray-100 transition hover:bg-gray-50"
                    >

                        <td className="px-4 py-4 text-sm text-gray-500">
                            {cliente.id}
                        </td>

                        <td className="px-4 py-4 font-medium text-gray-900">
                            {cliente.nome}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-600">
                            {cliente.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-600">
                            {cliente.telefone}
                        </td>

                        <td className="px-4 py-4">
                            <div className="flex gap-2">

                                <Link
                                    to={`/clientes/${cliente.id}/editar`}
                                    className="rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                                >
                                    Editar
                                </Link>

                                <button
                                    onClick={() => handleExcluir(cliente.id)}
                                    className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                                >
                                    Excluir
                                </button>

                            </div>
                        </td>

                    </tr>
                ))}
                </tbody>

            </table>

        </div>
    )
}

export default ClienteTable