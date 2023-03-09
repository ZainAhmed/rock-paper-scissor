import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  faTrophy, faFaceSadTear} from '@fortawesome/free-solid-svg-icons';
import { GameStatus } from 'src/app/gameStatus';
import { GameStatusService } from 'src/app/services/gameStatus/game-status.service';
import { SharedIdService } from 'src/app/services/sharedId/shared-id.service';
export interface DialogData {
  winner: string;
}

@Component({
  selector: 'app-match-completion-dialog',
  templateUrl: './match-completion-dialog.component.html',
  styleUrls: ['./match-completion-dialog.component.css']
})
export class MatchCompletionDialogComponent {
  @Output() resetMatchEmitter: EventEmitter<void> = new EventEmitter()
  status:GameStatus|undefined
  trophyIcon = faTrophy
  sadIcon = faFaceSadTear

  constructor(private gameStatusService: GameStatusService,
    private dialogRef: MatDialogRef<MatchCompletionDialogComponent>,
    private sharedIdService: SharedIdService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    const id: Number = this.sharedIdService.getId() as Number;
    this.gameStatusService.getGamesStatusById(id).subscribe({
      next: (response:GameStatus) => {
        this.status = response
      },
      error: (e:HttpErrorResponse) => console.log(e),
    })
    dialogRef.disableClose = true;
  }
  
  resetMatch(){
    this.dialogRef.close();
  }

}
