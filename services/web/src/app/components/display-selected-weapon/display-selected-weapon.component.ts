import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { faHandBackFist, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { state, style, trigger, keyframes, transition, animate } from '@angular/animations';
import { WeaponButtonType } from 'src/app/WeaponButtonType';
import { faHandFist, faHandScissors, faHand} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-display-selected-weapon',
  templateUrl: './display-selected-weapon.component.html',
  styleUrls: ['./display-selected-weapon.component.css'],
  animations:[
    trigger("IconState",[
      state("move",style({
        transform: 'translateY(0%)'
      })),
      transition("* => move",animate("2000ms",keyframes([
        style({transform: "translateY(-50%)", offset: 0}),
        style({transform: "translateY(50%)", offset: 0.125}),
        style({transform: "translateY(-50%)", offset: 0.25}),
        style({transform: "translateY(50%)", offset: 0.375}),
        style({transform: "translateY(-50%)", offset: 0.5}),
        style({transform: "translateY(50%)", offset: 0.625}),
        style({transform: "translateY(-50%)", offset: 0.75}),
        style({transform: "translateY(50%)", offset: 0.875}),
        style({transform: "translateY(0%)", offset: 1.0})
      ])))
    ])
  ]
})
export class DisplaySelectedWeaponComponent implements OnInit, OnDestroy {
  @Input() p1Weapon : WeaponButtonType |undefined ;
  @Output() setResultEmitter: EventEmitter<Array<string|undefined> > = new EventEmitter()
  noTimesCompletedAnimationCalled = 0
  comWeapon :WeaponButtonType | undefined
  weapons:Array<WeaponButtonType> =[
    {name:"Rock",icon:faHandFist},
    {name:"Paper",icon:faHand},
    {name:"Scissor",icon:faHandScissors}
  ]

  constructor(){
  }

  ngOnInit() {
    this.changePosition("move")
  }

  faHandBackFist=faHandBackFist
  position:string|undefined

  changePosition(newPosition:string){
    this.position = newPosition 
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  completedAnimation(input:any){
    this.noTimesCompletedAnimationCalled++
    if(this.noTimesCompletedAnimationCalled <2){
      const index = this.getRandomInt(3)
      this.comWeapon = this.weapons[index]
      setTimeout(()=>{
        this.comWeapon = this.weapons[index]
      },3000)
      this.setResultEmitter.emit([this.p1Weapon?.name,this.comWeapon.name])
    }
  }
  
  ngOnDestroy(){
    this.comWeapon = undefined
  }
}
