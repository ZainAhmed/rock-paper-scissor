import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchCompletionDialogComponent } from '../match-completion-dialog/match-completion-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() gameResult:string | undefined;
  @Output() resetRoundEmitter: EventEmitter<void> = new EventEmitter()
  p1Scores = [0,0,0]
  comScores = [0,0,0]

  constructor(public dialog: MatDialog){}
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

  openDialog(winner:string): void {
    let dialogRef = this.dialog.open(MatchCompletionDialogComponent, {
      data: {winner: winner},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.resetMatch()
      
    });
  }

  updateP1Score(){
    const scores = this.p1Scores
    let index =scores.indexOf(0);
    scores[index]=1
  }

  updateScore(isCom:boolean){
    if(isCom){
      this.updateComScore()
    } else{
      this.updateP1Score()
    }
  }

  resetRound(){
    this.resetRoundEmitter.emit()
  }

  isMatchWon(){
    if(this.p1Scores[2]===1){
      this.openDialog("p1")
      return true
    } else if(this.comScores[0]===1){
      this.openDialog("com")
      return true
    }
    return false
  }

  ngOnChanges(changes: SimpleChanges) {
   if(changes["gameResult"].currentValue !==""){
      setTimeout(()=>{const result = changes["gameResult"].currentValue
        if(result === "You Win"){
          this.updateScore(false)
        } else if(result === "You Lose"){
          this.updateScore(true)
        }
        const isWon = this.isMatchWon()
        if(!isWon){
          this.resetRound()
        } 
      },3000)
    }
  }

  resetMatch(){
    this.p1Scores = [0,0,0]
    this.comScores = [0,0,0]
    this.resetRound()
  }
}
