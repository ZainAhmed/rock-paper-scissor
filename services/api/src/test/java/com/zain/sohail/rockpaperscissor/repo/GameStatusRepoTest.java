package com.zain.sohail.rockpaperscissor.repo;

import com.zain.sohail.rockpaperscissor.model.GameStatus;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@DataJpaTest
class GameStatusRepoTest {
    @Autowired
    private GameStatusRepo underTest;
    @Test
    void itShouldFindGameStatusById() {
        //given
        Integer id=1;
        GameStatus gameStatus = new GameStatus(id,0,0,0);
        underTest.save(gameStatus);
        //when
        Optional<GameStatus> expected = underTest.findGameStatusById(id);
        //then
        assertThat(expected).hasValue(gameStatus);
    }

    @Test
    void itShouldNotFindGameStatusById() {
        //given
        Integer id=1;
        //when
        Optional<GameStatus> expected = underTest.findGameStatusById(id);
        //then
        assertThat(expected).isEmpty();
    }
}