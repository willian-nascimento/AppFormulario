package com.github.formularioapi.core.endereco;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends MongoRepository<Endereco, String> {
}
