package com.github.formularioapi.rest;

import com.github.formularioapi.core.dto.EnderecoDTO;
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
class FormularioResourceTest {
    private final TestRestTemplate testRestTemplate = new TestRestTemplate();

    private final FormularioService formularioService = new FormularioService();

    @Test void carregaIdTest(){
        FormularioDTO dto = new FormularioDTO();
        EnderecoDTO enderecoDTO = new EnderecoDTO();
        enderecoDTO.setCep("1234");
        dto.setNameUser("Teste");
        dto.setEndereco(enderecoDTO);

        HttpEntity<FormularioDTO> httpEntity = new HttpEntity<>(dto);
        ResponseEntity<String> response = testRestTemplate
                .exchange("/api/cadastro/salvar", HttpMethod.POST, httpEntity, String.class);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        formularioService.delete(response.getBody());
    }
}
