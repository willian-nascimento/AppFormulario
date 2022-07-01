package com.github.formularioapi.core.atencaobasica;

public class AtencaoBasicaDTO {
    private boolean educacao;
    private boolean saneamento;
    private boolean transporte;
    private boolean saude;
    private boolean agricultura;
    private boolean esporteLazer;

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
}
