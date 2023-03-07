package com.zain.sohail.rockpaperscissor.service;

import com.zain.sohail.rockpaperscissor.model.GameStatus;
import com.zain.sohail.rockpaperscissor.repo.GameStatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GameStatusService {
    private final GameStatusRepo gameStatusRepo;
    @Autowired
    public GameStatusService(GameStatusRepo gameStatusRepo) {
        this.gameStatusRepo = gameStatusRepo;
    }

    public GameStatus addGameStatus(GameStatus gameStatus){
       return gameStatusRepo.save(gameStatus);
    }
    public List<GameStatus> findAllGameStatuses(){
        return gameStatusRepo.findAll();
    }
    public GameStatus updateGameStatus(GameStatus gameStatus){
        return gameStatusRepo.save(gameStatus);
    }


}
