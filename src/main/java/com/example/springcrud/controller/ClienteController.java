package com.example.springcrud.controller;

import com.example.springcrud.model.Cliente;
import com.example.springcrud.service.ClienteService;
import com.example.springcrud.dto.ClienteResponseDTO;
import com.example.springcrud.dto.ClienteRequestDTO;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @PostMapping
    public ClienteResponseDTO salvar(@Valid @RequestBody ClienteRequestDTO clienteDTO) {
        return clienteService.salvar(clienteDTO);
    }

    @GetMapping
    public Page<ClienteResponseDTO> listarTodos(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String email,
            Pageable pageable) {

        return clienteService.listarTodos(nome, email, pageable);
    }

    @GetMapping("/{id}")
    public ClienteResponseDTO buscarPorId(@PathVariable Long id) {
        return clienteService.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public ClienteResponseDTO atualizar(
            @PathVariable Long id,
            @Valid @RequestBody ClienteRequestDTO clienteDTO) {

        return clienteService.atualizar(id, clienteDTO);
    }

    @DeleteMapping("/{id}")
    public String excluir(@PathVariable Long id) {
        return clienteService.excluir(id);
    }

}