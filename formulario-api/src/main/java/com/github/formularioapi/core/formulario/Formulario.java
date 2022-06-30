package com.github.formularioapi.core.formulario;

import com.github.formularioapi.core.endereco.Endereco;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Document public class Formulario {
    @Id private String id;
    private String nameUser;

    @OneToMany(cascade = CascadeType.PERSIST) @JoinColumn(name = "cep")
    private Endereco endereco;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}
