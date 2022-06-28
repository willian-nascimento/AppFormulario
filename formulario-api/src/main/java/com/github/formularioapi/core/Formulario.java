package com.github.formularioapi.core;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data @Document public class Formulario {
    @Id private String id;
    private String nameUser;
}
