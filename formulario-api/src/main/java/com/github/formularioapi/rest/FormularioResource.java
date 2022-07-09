package com.github.formularioapi.rest;

import com.github.formularioapi.core.dto.FormularioDTO;
import com.github.formularioapi.core.endereco.Endereco;
import com.github.formularioapi.core.formulario.Formulario;
import com.github.formularioapi.core.formulario.FormularioService;
import com.github.formularioapi.core.util.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cadastro")
public class FormularioResource {
    @Autowired FormularioService formularioService;

    @PostMapping("/salvar")
    public ResponseEntity<String> realizaCadastro(@RequestBody FormularioDTO dto) {
        Formulario formulario = ObjectMapper.map(dto, Formulario.class);
        Endereco endereco = ObjectMapper.map(dto.getEndereco(), Endereco.class);
        formulario.setEndereco(endereco);
        return new ResponseEntity<>(formularioService.save(formulario),HttpStatus.CREATED);
    }
}
