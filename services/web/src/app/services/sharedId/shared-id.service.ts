import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedIdService {
  Id: Number|undefined;
  constructor() { }
  setId(id:Number) {
    this.Id=id
  }
  getId(){
    return this.Id
  }
}
