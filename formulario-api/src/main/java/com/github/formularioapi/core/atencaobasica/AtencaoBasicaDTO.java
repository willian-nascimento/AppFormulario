package com.github.formularioapi.core.atencaobasica;

import lombok.Data;

@Data public class AtencaoBasicaDTO {
    private boolean educacao;
    private boolean saneamento;
    private boolean transporte;
    private boolean saude;
    private boolean agricultura;
    private boolean esporteLazer;
}
