package com.zain.sohail.rockpaperscissor.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zain.sohail.rockpaperscissor.model.GameStatus;
import com.zain.sohail.rockpaperscissor.service.GameStatusService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
class GameStatusControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private GameStatusService gameStatusService;

  

    @Test
    void shouldAddGameStatus() throws Exception {
        Integer id =1;
        GameStatus gameStatus = new GameStatus(0,0,0);
        GameStatus returnedGameStatus = new GameStatus(1,0,0,0);
        String jsonRequest = mapper.writeValueAsString(gameStatus);
        String jsonResponse = mapper.writeValueAsString(returnedGameStatus);
        when(gameStatusService.addGameStatus(gameStatus)).thenReturn(returnedGameStatus);
        mockMvc.perform(post("/status/add")
                .content(jsonRequest)
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isCreated())
                .andExpect(content().string(jsonResponse));

    }
}