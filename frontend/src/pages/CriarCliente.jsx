import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { criarCliente } from '../services/clienteService'

function CriarCliente() {

    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const cliente = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        criarCliente(cliente)
            .then(data => {
                console.log('Cliente criado:', data)
                navigate('/clientes')
            })
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-2xl">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Novo cliente
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Cadastre um novo cliente
                    </p>
                </div>

                <div className="rounded-xl bg-white p-8 shadow-sm">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Nome
                            </label>

                            <input
                                type="text"
                                value={nome}
                                onChange={event => setNome(event.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                E-mail
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Telefone
                            </label>

                            <input
                                type="text"
                                value={telefone}
                                onChange={event => setTelefone(event.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <div className="flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() => navigate('/clientes')}
                                className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
                            >
                                Salvar
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CriarCliente