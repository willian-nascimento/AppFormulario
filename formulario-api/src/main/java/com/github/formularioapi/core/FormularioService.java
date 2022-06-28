package com.github.formularioapi.core;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormularioService {
    @Autowired FormularioRepository repository;

    public String save(){
        Formulario formulario = new Formulario();
        formulario.setNameUser("teste");
        return repository.insert(formulario).getId();
    }
}
