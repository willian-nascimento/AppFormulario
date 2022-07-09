package com.github.formularioapi.core.atencaobasica;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Data @Document public class AtencaoBasica {
    @Id @GeneratedValue(strategy = GenerationType.AUTO) private int id;
    private boolean educacao;
    private boolean saneamento;
    private boolean transporte;
    private boolean saude;
    private boolean agricultura;
    private boolean esporteLazer;
}
