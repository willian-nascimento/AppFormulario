package com.github.formularioapi.core.endereco;

import com.github.formularioapi.core.formulario.Formulario;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Document public class Endereco {
    @Id private String cep;
    private String cidade;
    private String agovila;
    private int numeroCasa;
    @ManyToOne(fetch = FetchType.EAGER)
    private Formulario formulario;

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getAgovila() {
        return agovila;
    }

    public void setAgovila(String agovila) {
        this.agovila = agovila;
    }

    public int getNumeroCasa() {
        return numeroCasa;
    }

    public void setNumeroCasa(int numeroCasa) {
        this.numeroCasa = numeroCasa;
    }

    public Formulario getFormulario() {
        return formulario;
    }

    public void setFormulario(Formulario formulario) {
        this.formulario = formulario;
    }
}
