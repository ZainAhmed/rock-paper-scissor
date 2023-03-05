import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeaponButtonType } from 'src/app/WeaponButtonType';

@Component({
  selector: 'app-weapon-button',
  templateUrl: './weapon-button.component.html',
  styleUrls: ['./weapon-button.component.css']
})
export class WeaponButtonComponent {
  @Input() weaponButton : WeaponButtonType |undefined ;
  @Output() weaponButtonClickEmitter: EventEmitter<WeaponButtonType > = new EventEmitter()
 
  onClick(input:WeaponButtonType){
    this.weaponButtonClickEmitter.emit(input) 
  }
}
