package com.github.formularioapi.core.formulario;

import lombok.Data;

@Data public class FormularioDTO {
    private String nameUser;
    private int quantidadeMoradores;
    private String zonaEleitoral;
    private String fonteRenda;
    private String cep;
    private String cidade;
    private String agrovila;
    private int numeroCasa;
    private boolean educacao;
    private boolean saneamento;
    private boolean transporte;
    private boolean saude;
    private boolean agricultura;
    private boolean esporteLazer;
}
