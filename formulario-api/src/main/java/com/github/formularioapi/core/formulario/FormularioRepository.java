package com.github.formularioapi.core.formulario;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormularioRepository extends MongoRepository<Formulario, String> {
    Formulario findFormularioById(String idUser);
}
