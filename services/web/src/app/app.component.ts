import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faHandFist, faHandScissors, faHand} from '@fortawesome/free-solid-svg-icons';
import { GameStatusService } from './services/gameStatus/game-status.service';
import { GameStatus } from './gameStatus';
import { WeaponButtonType } from './WeaponButtonType';
import { SharedIdService } from './services/sharedId/shared-id.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private gameStatusService: GameStatusService, private sharedIdService: SharedIdService){}

  id:Number | undefined;
  DRAW = "Its a Draw"
  WIN="You Win"
  LOSE = "You Lose"
  gameResult="";
  selectedP1Btn  : WeaponButtonType |undefined;
  
  p1Buttons:Array<WeaponButtonType> =[
    {name:"Rock",icon:faHandFist},
    {name:"Paper",icon:faHand},
    {name:"Scissor",icon:faHandScissors}
  ]

  addGameStatus(){
    this.gameStatusService.addGamesStatuses({won:0,lose:0,draw:0}).subscribe({
      next: (response:GameStatus) => {
        this.id=response.id as number;
        this.sharedIdService.setId(response.id as Number)
      },
      error: (e:HttpErrorResponse) => console.log(e),
    })
    
  }

  updateGameStatusByAttribute(attribute: String){
    this.gameStatusService.updateGameStatusByAttribute(this.id as Number,attribute).subscribe({
      next: (response:GameStatus) => {console.log(response)},
      error: (e:HttpErrorResponse) => console.log(e),
    })
  }

  ngOnInit() {
    this.addGameStatus()
  }

  handleP1ButtonClick(input:WeaponButtonType){
    this.selectedP1Btn = this.p1Buttons.filter((val)=>val.name === input.name)[0]
   
  }
  
  findResultAndSetWinner(input:Array<string|undefined>){
   const  [p1,com] = input
    switch(true){
      case (p1==="Rock" && com==="Rock"):
        this.gameResult = this.DRAW
        this.updateGameStatusByAttribute("draw");
        break
      case (p1==="Rock" && com==="Paper"):
        this.gameResult = this.LOSE
        this.updateGameStatusByAttribute("lose");
        break
      case (p1==="Rock" && com==="Scissor"):
        this.gameResult = this.WIN
        this.updateGameStatusByAttribute("won");
        break
      case (p1==="Paper" && com==="Rock"):
        this.gameResult = this.WIN
        this.updateGameStatusByAttribute("won");
        break
      case (p1==="Paper" && com==="Paper"):
        this.gameResult = this.DRAW
        this.updateGameStatusByAttribute("draw");
        break
      case (p1==="Paper" && com==="Scissor"):
        this.gameResult = this.LOSE
        this.updateGameStatusByAttribute("lose");
        break
      case (p1==="Scissor" && com==="Rock"):
        this.gameResult = this.LOSE
        this.updateGameStatusByAttribute("lose");
        break
      case (p1==="Scissor" && com==="Paper"):
        this.gameResult = this.WIN
        this.updateGameStatusByAttribute("won");
        break
      case (p1==="Scissor" && com==="Scissor"):
        this.gameResult = this.DRAW
        this.updateGameStatusByAttribute("draw");
      break
        default:
          console.log("default")
    }

  }

  resetRound(){
    this.gameResult=""
   this.selectedP1Btn = undefined
  }
}
