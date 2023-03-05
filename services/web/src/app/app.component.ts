import { Component } from '@angular/core';
import { faHandFist, faHandScissors, faHand} from '@fortawesome/free-solid-svg-icons';

import { WeaponButtonType } from './WeaponButtonType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DRAW = "Its a Draw"
  WIN="You Win"
  LOSE = "You Lose"
  gameResult="";

  p1Buttons:Array<WeaponButtonType> =[
    {name:"Rock",icon:faHandFist,isCom:false,isDisabled:false},
    {name:"Paper",icon:faHand,isCom:false,isDisabled:false},
    {name:"Scissor",icon:faHandScissors,isCom:false,isDisabled:false}
  ]

  comButtons:Array<WeaponButtonType> =[
    {name:"Scissor",icon:faHandScissors,isCom:true,isDisabled:false},
    {name:"Paper",icon:faHand,isCom:true,isDisabled:false},
    {name:"Rock",icon:faHandFist,isCom:true,isDisabled:false},
  ]

  handleP1ButtonClick(input:WeaponButtonType){
    this.p1Buttons = this.p1Buttons.map((val)=>{
      if(val.name !== input.name){
        val.isDisabled= true
      }
      return val
    })
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  setDisableComButtonNotMatchingIndex(index:number){
    this.comButtons = this.comButtons.map((val,ind)=>{
      if(ind !== index){
        val.isDisabled= true
      }
      return val
    })
  }

  handleComButtonClick(){
    const index = this.getRandomInt(3);
    this.setDisableComButtonNotMatchingIndex(index)
  }

  setScore(winnerScores:Array<number>,isCom:boolean){
    let index = winnerScores.indexOf(1)
    if(index === -1){
      index = 0
    }

  }
  
  findResultAndSetWinner(p1:string,com:string){
    switch(true){
      case (p1==="Rock" && com==="Rock"):
        this.gameResult = this.DRAW
        break
      case (p1==="Rock" && com==="Paper"):
        this.gameResult = this.LOSE
        break
      case (p1==="Rock" && com==="Scissor"):
        this.gameResult = this.WIN
        break
      case (p1==="Paper" && com==="Rock"):
        this.gameResult = this.WIN
        break
      case (p1==="Paper" && com==="Paper"):
        this.gameResult = this.DRAW
        break
      case (p1==="Paper" && com==="Scissor"):
        this.gameResult = this.LOSE
        break
      case (p1==="Scissor" && com==="Rock"):
        this.gameResult = this.LOSE
        break
      case (p1==="Scissor" && com==="Paper"):
        this.gameResult = this.WIN
        break
      case (p1==="Scissor" && com==="Scissor"):
        this.gameResult = this.DRAW
      break
        default:
          console.log("default")
    }

  }
  handleWeaponButtonClick(event:WeaponButtonType){
    this.handleP1ButtonClick(event)
    this.handleComButtonClick()
    const selectedP1Button = this.p1Buttons.filter((val)=> !val.isDisabled)
    const selectedComButtons = this.comButtons.filter((val)=> !val.isDisabled)
    this.findResultAndSetWinner(selectedP1Button[0].name,selectedComButtons[0].name)
  }

  resetRound(){
    this.gameResult=""
    this.p1Buttons = [
      {name:"Rock",icon:faHandFist,isCom:false,isDisabled:false},
      {name:"Paper",icon:faHand,isCom:false,isDisabled:false},
      {name:"Scissor",icon:faHandScissors,isCom:false,isDisabled:false}
    ]
    this.comButtons=[
      {name:"Scissor",icon:faHandScissors,isCom:true,isDisabled:false},
      {name:"Paper",icon:faHand,isCom:true,isDisabled:false},
      {name:"Rock",icon:faHandFist,isCom:true,isDisabled:false},
    ]
  
  }

  setWinner(winner:string){
    console.log(winner)
  }
}
