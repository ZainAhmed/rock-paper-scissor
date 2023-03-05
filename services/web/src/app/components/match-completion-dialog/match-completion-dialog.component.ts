import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  faStar, faXmark} from '@fortawesome/free-solid-svg-icons';
export interface DialogData {
  winner: string;
}

@Component({
  selector: 'app-match-completion-dialog',
  templateUrl: './match-completion-dialog.component.html',
  styleUrls: ['./match-completion-dialog.component.css']
})
export class MatchCompletionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MatchCompletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    dialogRef.disableClose = true;
  }
  
  starIcon = faStar
  xIcon = faXmark
  resetMatch(){}

}
