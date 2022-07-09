package com.github.formularioapi.core.endereco;

import lombok.Data;

@Data public class EnderecoDTO {
    private String cep;
    private String cidade;
    private String agrovila;
    private int numeroCasa;
}
