package com.github.formularioapi.rest;

import com.github.formularioapi.core.atencaobasica.AtencaoBasica;
import com.github.formularioapi.core.endereco.Endereco;
import com.github.formularioapi.core.formulario.Formulario;
import com.github.formularioapi.core.formulario.FormularioDTO;
import com.github.formularioapi.core.formulario.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController @RequestMapping("/api/cadastro") public class FormularioResource {
    @Autowired FormularioService formularioService;

    @PostMapping("/salvar") @CrossOrigin(origins = "http://localhost:19006/")
    public ResponseEntity<String> realizaCadastro(@Valid @RequestBody FormularioDTO dto) {
        Formulario formulario = new Formulario();
        AtencaoBasica atencaoBasica = new AtencaoBasica();
        Endereco endereco = new Endereco();

        atencaoBasica.setAgricultura(dto.isAgricultura());
        atencaoBasica.setEducacao(dto.isEducacao());
        atencaoBasica.setEsporteLazer(dto.isEsporteLazer());
        atencaoBasica.setSaneamento(dto.isSaneamento());
        atencaoBasica.setSaude(dto.isSaude());
        atencaoBasica.setTransporte(dto.isTransporte());

        endereco.setNumeroCasa(dto.getNumeroCasa());
        endereco.setCep(dto.getCep());
        endereco.setAgrovila(dto.getAgrovila());
        endereco.setCidade(dto.getCidade());

        formulario.setAtencaoBasica(atencaoBasica);
        formulario.setEndereco(endereco);
        formulario.setQuantidadeMoradores(dto.getQuantidadeMoradores());
        formulario.setZonaEleitoral(dto.getZonaEleitoral());
        formulario.setNameUser(dto.getNameUser());
        formulario.setFonteRenda(dto.getFonteRenda());
        return new ResponseEntity<>(formularioService.save(formulario), HttpStatus.CREATED);
    }
}
