package com.github.formularioapi.core.formulario;

import com.github.formularioapi.core.atencaobasica.AtencaoBasicaDTO;
import com.github.formularioapi.core.endereco.EnderecoDTO;

public class FormularioDTO {
    private String nameUser;
    private int quantidadeMoradores;
    private String zonaEleitoral;
    private String fonteRenda;
    private EnderecoDTO endereco;
    private AtencaoBasicaDTO atencaobasica;

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public int getQuantidadeMoradores() {
        return quantidadeMoradores;
    }

    public void setQuantidadeMoradores(int quantidadeMoradores) {
        this.quantidadeMoradores = quantidadeMoradores;
    }

    public String getZonaEleitoral() {
        return zonaEleitoral;
    }

    public void setZonaEleitoral(String zonaEleitoral) {
        this.zonaEleitoral = zonaEleitoral;
    }

    public String getFonteRenda() {
        return fonteRenda;
    }

    public void setFonteRenda(String fonteRenda) {
        this.fonteRenda = fonteRenda;
    }

    public EnderecoDTO getEndereco() {
        return endereco;
    }

    public void setEndereco(EnderecoDTO endereco) {
        this.endereco = endereco;
    }

    public AtencaoBasicaDTO getAtencaobasica() {
        return atencaobasica;
    }

    public void setAtencaobasica(AtencaoBasicaDTO atencaobasica) {
        this.atencaobasica = atencaobasica;
    }
}
