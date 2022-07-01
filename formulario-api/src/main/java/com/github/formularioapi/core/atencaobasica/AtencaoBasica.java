package com.github.formularioapi.core.atencaobasica;

import com.github.formularioapi.core.formulario.Formulario;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToOne;

@Document public class AtencaoBasica {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private boolean educacao;
    private boolean saneamento;
    private boolean transporte;
    private boolean saude;
    private boolean agricultura;
    private boolean esporteLazer;
    @ManyToOne(fetch = FetchType.EAGER)
    private Formulario formulario;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isEducacao() {
        return educacao;
    }

    public void setEducacao(boolean educacao) {
        this.educacao = educacao;
    }

    public boolean isSaneamento() {
        return saneamento;
    }

    public void setSaneamento(boolean saneamento) {
        this.saneamento = saneamento;
    }

    public boolean isTransporte() {
        return transporte;
    }

    public void setTransporte(boolean transporte) {
        this.transporte = transporte;
    }

    public boolean isSaude() {
        return saude;
    }

    public void setSaude(boolean saude) {
        this.saude = saude;
    }

    public boolean isAgricultura() {
        return agricultura;
    }

    public void setAgricultura(boolean agricultura) {
        this.agricultura = agricultura;
    }

    public boolean isEsporteLazer() {
        return esporteLazer;
    }

    public void setEsporteLazer(boolean esporteLazer) {
        this.esporteLazer = esporteLazer;
    }

    public Formulario getFormulario() {
        return formulario;
    }

    public void setFormulario(Formulario formulario) {
        this.formulario = formulario;
    }
}
