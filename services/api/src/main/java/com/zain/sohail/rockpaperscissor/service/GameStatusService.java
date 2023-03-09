package com.zain.sohail.rockpaperscissor.service;

import com.zain.sohail.rockpaperscissor.exception.UserNotFoundException;
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

    public GameStatus findGameStatusById(Integer id){
        return gameStatusRepo.findGameStatusById(id)
                .orElseThrow(()-> new UserNotFoundException("User by id "+ id + " was not found"));
    }

    public GameStatus updateGameStatusByAttribute(Integer id,String attribute){
        GameStatus gameStatus =  this.findGameStatusById(id);
        switch(attribute){
            case "draw":
                gameStatus.setDraw(gameStatus.getDraw()+1);
                break;
            case "won":
                gameStatus.setWon(gameStatus.getWon()+1);
                break;
            case "lose":
                gameStatus.setLose(gameStatus.getLose()+1);
                break;
        }
        return gameStatusRepo.save(gameStatus);
    }
    public GameStatus updateGameStatus(GameStatus gameStatus){
        return gameStatusRepo.save(gameStatus);
    }


}
