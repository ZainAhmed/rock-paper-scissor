import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  faTrophy, faFaceSadTear} from '@fortawesome/free-solid-svg-icons';
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

  constructor(
    public dialogRef: MatDialogRef<MatchCompletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    dialogRef.disableClose = true;
  }
  
  trophyIcon = faTrophy
  sadIcon = faFaceSadTear
  
  resetMatch(){
    this.dialogRef.close();
  }

}
