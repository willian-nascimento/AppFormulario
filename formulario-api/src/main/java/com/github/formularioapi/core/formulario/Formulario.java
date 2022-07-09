package com.github.formularioapi.core.formulario;

import com.github.formularioapi.core.atencaobasica.AtencaoBasica;
import com.github.formularioapi.core.endereco.Endereco;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

@Data @Document public class Formulario {
    @Id @GeneratedValue(strategy = GenerationType.AUTO) private String id;
    private String nameUser;
    private int quantidadeMoradores;
    private String zonaEleitoral;
    private String fonteRenda;
    @OneToMany(cascade = CascadeType.PERSIST) @JoinColumn(name = "id") private Endereco endereco;
    @OneToMany(cascade = CascadeType.PERSIST) @JoinColumn(name = "id") private AtencaoBasica atencaoBasica;
}
