import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() gameResult:string | undefined;
  @Output() resetRoundEmitter: EventEmitter<void> = new EventEmitter()
  @Output() setWinnerEmitter: EventEmitter<string> = new EventEmitter()
  p1Scores = [0,0,0]
  comScores = [0,0,0]

  updateComScore(){
    const scores = this.comScores
    let index =scores.indexOf(1);
    if(index===-1){
      scores[2]=1
    } else {
      index--
      scores[index]=1
    }
  }

  upadateP1Score(){
    const scores = this.p1Scores
    let index =scores.indexOf(0);
    scores[index]=1
  }

  updateScore(isCom:boolean){
    if(isCom){
    this.updateComScore()
    } else{
      this.upadateP1Score()
    }
  }

  resetRound(){
    this.resetRoundEmitter.emit()
  }

  isMatchWon(){
    if(this.p1Scores[2]===1){
      this.setWinnerEmitter.emit("p1");
    } else if(this.comScores[0]===1){
      this.setWinnerEmitter.emit("com");
    }
  }

  ngOnChanges(changes: SimpleChanges) {
   if(changes["gameResult"].currentValue !==""){
      setTimeout(()=>{const result = changes["gameResult"].currentValue
        if(result === "You Win"){
        this.updateScore(false)
        } else if(result === "You Lose"){
        this.updateScore(true)
        }
        this.resetRound()
        this.isMatchWon()
      },3000)
    }
  }
}
