package com.zain.sohail.rockpaperscissor.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(SpringExtension.class)
@WebMvcTest(GameStatusController.class)
class GameStatusControllerIntTest {

    @Autowired
    private MockMvc mvc;


    @Test
    void addGameStatus() {
        RequestBuilder request = MockMvcRequestBuilders.post("/status/add",{"won":0,})
    }

    @Test
    void updateEmployee() {
    }

    @Test
    void updateEmployeeAttribute() {
    }
}