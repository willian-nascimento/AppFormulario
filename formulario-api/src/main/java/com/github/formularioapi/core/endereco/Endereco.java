package com.github.formularioapi.core.endereco;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document public class Endereco {
    @Id
    private String cep;
    private String cidade;
    private String bairro;
    private int numeroCasa;

    public String getCEP() {
        return cep;
    }

    public void setCEP(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public int getNumeroCasa() {
        return numeroCasa;
    }

    public void setNumeroCasa(int numeroCasa) {
        this.numeroCasa = numeroCasa;
    }
}
