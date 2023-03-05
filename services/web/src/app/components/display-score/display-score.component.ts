import { Component, Input } from '@angular/core';
import {  faStar as regularStar} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-display-score',
  templateUrl: './display-score.component.html',
  styleUrls: ['./display-score.component.css']
})

export class DisplayScoreComponent {
  @Input() playerName:string|undefined
  @Input() scores:Array<number>|undefined

  filledStar = regularStar
  outlinedStar = faStar

}
