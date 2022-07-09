package com.github.formularioapi.core.formulario;

import com.github.formularioapi.core.atencaobasica.AtencaoBasicaDTO;
import com.github.formularioapi.core.endereco.EnderecoDTO;
import lombok.Data;

@Data public class FormularioDTO {
    private String nameUser;
    private int quantidadeMoradores;
    private String zonaEleitoral;
    private String fonteRenda;
    private EnderecoDTO endereco;
    private AtencaoBasicaDTO atencaobasica;
}
