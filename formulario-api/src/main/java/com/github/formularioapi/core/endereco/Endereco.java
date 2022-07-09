package com.github.formularioapi.core.endereco;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Data @Document public class Endereco {
    @Id @GeneratedValue(strategy = GenerationType.AUTO) int id;
    private String cep;
    private String cidade;
    private String agrovila;
    private int numeroCasa;
}
