package com.zain.sohail.rockpaperscissor.repo;

import com.zain.sohail.rockpaperscissor.model.GameStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameStatusRepo extends JpaRepository<GameStatus,Integer> {
}
