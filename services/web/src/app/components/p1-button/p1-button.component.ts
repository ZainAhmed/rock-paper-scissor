import { Component,Input, OnInit } from '@angular/core';
import { CustomButtonType } from 'src/app/CustomButtonType';

@Component({
  selector: 'app-p1-button',
  templateUrl: './p1-button.component.html',
  styleUrls: ['./p1-button.component.css']
})
export class P1ButtonComponent {
  @Input() p1Button : CustomButtonType |undefined ;
  constructor(){
  }
}
