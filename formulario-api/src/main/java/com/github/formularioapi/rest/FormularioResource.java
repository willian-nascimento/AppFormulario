package com.github.formularioapi.rest;

import com.github.formularioapi.core.atencaobasica.AtencaoBasica;
import com.github.formularioapi.core.formulario.FormularioDTO;
import com.github.formularioapi.core.endereco.Endereco;
import com.github.formularioapi.core.formulario.Formulario;
import com.github.formularioapi.core.formulario.FormularioService;
import com.github.formularioapi.core.util.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@RestController @RequestMapping("/api/cadastro") public class FormularioResource {
    @Autowired FormularioService formularioService;

    @PostMapping("/salvar") @CrossOrigin(origins = "http://localhost:19006/")
    public ResponseEntity<String> realizaCadastro(@RequestBody @NotNull FormularioDTO dto) {
        Formulario formulario = ObjectMapper.map(dto, Formulario.class);
        Endereco endereco = ObjectMapper.map(dto.getEndereco(), Endereco.class);
        AtencaoBasica atencaoBasica = ObjectMapper.map(dto.getAtencaobasica(), AtencaoBasica.class);
        formulario.setEndereco(endereco);
        formulario.setAtencaoBasica(atencaoBasica);
        return new ResponseEntity<>(formularioService.save(formulario), HttpStatus.CREATED);
    }
}
