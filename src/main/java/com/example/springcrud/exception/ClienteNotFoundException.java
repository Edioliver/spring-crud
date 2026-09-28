package com.example.springcrud.exception;

public class ClienteNotFoundException extends RuntimeException {

    public ClienteNotFoundException(String mensagem) {
        super(mensagem);
    }
}