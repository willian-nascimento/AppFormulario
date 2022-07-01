package com.github.formularioapi.rest;

import com.github.formularioapi.core.dto.FormularioDTO;
import com.github.formularioapi.core.formulario.FormularioService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FormularioResourceTest {
    @Autowired TestRestTemplate testRestTemplate;

    @Autowired FormularioService formularioService;

    @Test
    public void carregaIdTest(){
        FormularioDTO dto = new FormularioDTO();
        dto.setNameUser("Teste");
        HttpEntity<FormularioDTO> httpEntity = new HttpEntity<>(dto);
        ResponseEntity<String> response = testRestTemplate
                .exchange("/api/cadastro/salvar", HttpMethod.POST, httpEntity, String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        formularioService.delete(response.getBody());
    }
}
