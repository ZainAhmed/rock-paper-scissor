package com.zain.sohail.rockpaperscissor.service;

import com.zain.sohail.rockpaperscissor.exception.UserNotFoundException;
import com.zain.sohail.rockpaperscissor.model.GameStatus;
import com.zain.sohail.rockpaperscissor.repo.GameStatusRepo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.HttpClientErrorException;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class GameStatusServiceTest {
    @Mock private GameStatusRepo gameStatusRepo;
    private GameStatusService underTest;

    @BeforeEach
    void setUp() {
        underTest = new GameStatusService(gameStatusRepo);
    }

    @Test
    void CanAddGameStatus() {
        //given
        Integer id=1;
        GameStatus gameStatus = new GameStatus(id,0,0,0);
        //when
        underTest.addGameStatus(gameStatus);
        //then
        ArgumentCaptor<GameStatus> gameStatusArgumentCaptor = ArgumentCaptor.forClass(GameStatus.class);
        verify(gameStatusRepo).save(gameStatusArgumentCaptor.capture());

        GameStatus capturedGameStatus = gameStatusArgumentCaptor.getValue();
        assertThat(capturedGameStatus).isEqualTo(gameStatus);
    }

    @Test
    void CannotFindGameStatusById() {
        //given
        Integer id =1;
        //then
        assertThatThrownBy(()-> underTest.findGameStatusById(id))
                .isInstanceOf(UserNotFoundException.class)
                .hasMessage("User by id "+ id + " was not found");
        verify(gameStatusRepo,never()).save(any());
    } 
}