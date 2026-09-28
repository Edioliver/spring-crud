package com.example.springcrud.service;

import com.example.springcrud.model.Cliente;
import com.example.springcrud.repository.ClienteRepository;
import com.example.springcrud.exception.ClienteNotFoundException;
import com.example.springcrud.exception.EmailDuplicadoException;
import com.example.springcrud.dto.ClienteResponseDTO;
import com.example.springcrud.dto.ClienteRequestDTO;

import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public ClienteResponseDTO salvar(ClienteRequestDTO clienteDTO) {

        if (clienteRepository.existsByEmail(clienteDTO.getEmail())) {
            throw new EmailDuplicadoException("E-mail já cadastrado");
        }

        Cliente cliente = new Cliente();

        cliente.setNome(clienteDTO.getNome());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setTelefone(clienteDTO.getTelefone());

        Cliente clienteSalvo = clienteRepository.save(cliente);

        return new ClienteResponseDTO(
                clienteSalvo.getId(),
                clienteSalvo.getNome(),
                clienteSalvo.getEmail(),
                clienteSalvo.getTelefone()
        );
    }

    public Page<ClienteResponseDTO> listarTodos(
            String nome,
            String email,
            Pageable pageable) {

        Page<Cliente> clientes = clienteRepository.buscarPorFiltros(
                nome,
                email,
                pageable
        );

        return clientes.map(cliente ->
                new ClienteResponseDTO(
                        cliente.getId(),
                        cliente.getNome(),
                        cliente.getEmail(),
                        cliente.getTelefone()
                )
        );
    }

    public ClienteResponseDTO buscarPorId(Long id) {

        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() ->
                        new ClienteNotFoundException("Cliente não encontrado"));

        return new ClienteResponseDTO(
                cliente.getId(),
                cliente.getNome(),
                cliente.getEmail(),
                cliente.getTelefone()
        );
    }

    public ClienteResponseDTO atualizar(Long id, ClienteRequestDTO clienteDTO) {

        Cliente clienteExistente = clienteRepository.findById(id)
                .orElseThrow(() ->
                        new ClienteNotFoundException("Cliente não encontrado"));

        if (clienteRepository.existsByEmailAndIdNot(clienteDTO.getEmail(), id)) {
            throw new EmailDuplicadoException("E-mail já cadastrado");
        }

        clienteExistente.setNome(clienteDTO.getNome());
        clienteExistente.setEmail(clienteDTO.getEmail());
        clienteExistente.setTelefone(clienteDTO.getTelefone());

        Cliente clienteAtualizado = clienteRepository.save(clienteExistente);

        return new ClienteResponseDTO(
                clienteAtualizado.getId(),
                clienteAtualizado.getNome(),
                clienteAtualizado.getEmail(),
                clienteAtualizado.getTelefone()
        );
    }

    public String excluir(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() ->
                        new ClienteNotFoundException("Cliente não encontrado"));

        clienteRepository.delete(cliente);

        return "Cliente excluído com sucesso";
    }
}