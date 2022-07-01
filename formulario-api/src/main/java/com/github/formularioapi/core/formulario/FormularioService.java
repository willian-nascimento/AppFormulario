package com.github.formularioapi.core.formulario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormularioService {
    @Autowired FormularioRepository repository;

    public String save(Formulario formulario){
        return repository.insert(formulario).getId();
    }

    public void delete(String idUsuario){
        Formulario usuario = repository.findFormularioById(idUsuario);
        repository.delete(usuario);
    }
}
