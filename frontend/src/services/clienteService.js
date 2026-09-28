const API_URL = 'http://localhost:8080/api/clientes'

export function listarClientes() {
  return fetch(API_URL)
    .then(response => response.json())
}

export function criarCliente(cliente) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })
      .then(response => response.json())
}

export function buscarCliente(id) {
  return fetch(`${API_URL}/${id}`)
    .then(response => response.json())
}

export function atualizarCliente(id, cliente) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })
    .then(response => response.json())
}

export function excluirCliente(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.text())
}