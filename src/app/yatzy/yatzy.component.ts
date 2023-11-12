import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yatzy',
  templateUrl: './yatzy.component.html',
  styleUrls: ['./yatzy.component.scss']
})
export class YatzyComponent implements OnInit {
  nowUser = "turn : Player1";
  sum = 0;
  dice = [1,1,1,1,1];
  diceB = ["b","b","b","b","b"];
  diceBool = [false,false,false,false,false];
  rollButtom = "START";

  min = 1 ;
  max = 6 ;

  Player1 = {
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    sum: 0,
    bonus: 0,
    onePair: 0,
    twoPair: 0,
    yatzy: 0,
    total: 0,
  };

  constructor(){
    for (let i = 0; i < this.dice.length; i++) {
      this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  rollClick(){
    //STARTボタンで初期化
    if(this.rollButtom == "START"){
      this.rollButtom = "ROLL";
      this.diceB = ["","","","",""];
      this.diceBool = [true,true,true,true,true];
      for (let i = 0; i < this.dice.length; i++) {
        this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
      }
    //ROLLボタンでスイッチONのボタンだけサイコロを振る
    }else{
      for (let i = 0; i < this.diceBool.length; i++) {
        if(this.diceBool[i]){
          this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
        }
      }
    }
    this.sum++;
    if(this.sum % 2 == 0 ){
      this.nowUser = "turn : Player1";
    }else{
      this.nowUser = "turn : Player2";
    }
  }
  
  diceSwitch(diceNumber: number){
    if(this.diceBool[diceNumber]){
      this.diceB[diceNumber] = "b";
      this.diceBool[diceNumber] = false;
    }else{
      this.diceB[diceNumber] = "";
      this.diceBool[diceNumber] = true;
    }
  }

}
