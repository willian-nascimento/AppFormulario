package com.github.formularioapi.rest;

import com.github.formularioapi.core.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/formulario")
public class FormularioResource {
    @Autowired FormularioService formularioService;
    @GetMapping
    public ResponseEntity<String> carregaId(){
        return new ResponseEntity<>(formularioService.save(), HttpStatus.OK);
    }

}
