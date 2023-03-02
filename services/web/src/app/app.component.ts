import { Component } from '@angular/core';
import { faHandBackFist, faHandScissors, faHand } from '@fortawesome/free-solid-svg-icons';
import { CustomButtonType } from './CustomButtonType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  options:Array<CustomButtonType> =[
    {name:"Rock",icon:faHandBackFist},
    {name:"Paper",icon:faHand},
    {name:"Scissor",icon:faHandScissors}
  ]
  constructor(){}
}
