package com.github.formularioapi.rest;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FormularioResourceTest {

    @Autowired FormularioResource resource;

    @Test
    public void carregaIdTest(){
        ResponseEntity<String> response = resource
                .carregaId();
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
