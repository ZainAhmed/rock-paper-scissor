package com.zain.sohail.rockpaperscissor.repo;

import com.zain.sohail.rockpaperscissor.model.GameStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameStatusRepo extends JpaRepository<GameStatus,Integer> {
    GameStatus findGameStatusById(Integer id);
}
