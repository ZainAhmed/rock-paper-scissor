package com.zain.sohail.rockpaperscissor.controller;

import com.zain.sohail.rockpaperscissor.model.GameStatus;
import com.zain.sohail.rockpaperscissor.service.GameStatusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/status")
public class GameStatusController {
    private final GameStatusService gameStatusService;

    public GameStatusController(GameStatusService gameStatusService) {
        this.gameStatusService = gameStatusService;
    }

    @GetMapping("/find/id")
    public ResponseEntity<GameStatus> getAllStatuses(@PathVariable("id") Integer id){
         GameStatus gameStatuses = gameStatusService.findGameStatusById(id);
         return new ResponseEntity<>(gameStatuses ,HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<GameStatus> addGameStatus(@RequestBody GameStatus gameStatus){
        GameStatus newGameStatus = gameStatusService.addGameStatus(gameStatus);
        return new ResponseEntity<>(newGameStatus, HttpStatus.CREATED );
    }

    @PutMapping("/update")
    public ResponseEntity<GameStatus> updateEmployee(@RequestBody GameStatus gameStatus){
        GameStatus updatedGameStatus = gameStatusService.updateGameStatus(gameStatus);
        return new ResponseEntity<>(updatedGameStatus,HttpStatus.OK);
    }

    @PutMapping("/updateByAttribute")
    public ResponseEntity<GameStatus> updateEmployeeAttribute(@RequestBody Integer id, String attribute){
        GameStatus updatedGameStatus = gameStatusService.updateGameStatusByAttribute(id,attribute);
        return new ResponseEntity<>(updatedGameStatus,HttpStatus.OK);
    }


}
