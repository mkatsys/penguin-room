import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PenguinlistClickService {

  penguin : any;

  constructor() { }

  setClick(penguinListNumber : any) {
    this.penguin = penguinListNumber;
  }

  getClick() {
    return this.penguin;
  }

}
