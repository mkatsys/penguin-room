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
  rollCount = 0;
  rollStop = false;

  min = 1 ;
  max = 6 ;

  color = '#bbb';

  fontColors = {
    ones: '#bbb',
    twos: '#bbb',
    threes: '#bbb',
    fours: '#bbb',
    fives: '#bbb',
    sixes: '#bbb',
    sum: '#bbb',
    bonus: '#bbb',
    onePair: '#bbb',
    twoPair: '#bbb',
    yatzy: '#bbb',
    total: '#bbb',
    chance: '#bbb',
  };

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
    chance: 0,
  };

  Player1Decision = {
    ones: false,
    twos: false,
    threes: false,
    fours: false,
    fives: false,
    sixes: false,
    sum: false,
    bonus: false,
    onePair: false,
    twoPair: false,
    yatzy: false,
    total: false,
    chance: false,
  };
ones: any;

  constructor(){
    for (let i = 0; i < this.dice.length; i++) {
      this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  startButtom(){
    this.rollButtom = "ROLL";
    this.rollStop = false;
    this.diceB = ["","","","",""];
    this.diceBool = [true,true,true,true,true];
    for (let i = 0; i < this.dice.length; i++) {
      this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
    }
    this.onesClass();
    this.twosClass();
    this.threesClass();
    this.foursClass();
    this.fivesClass();
    this.sixesClass();
    this.chanceClass();
  }

  rollClick(){
    //STARTボタンで初期化
    if(this.rollButtom == "START"){
      this.startButtom();
    //ROLLボタンでスイッチONのボタンだけサイコロを振る(最大3回まで)
    }else{
      this.rollButton();
    }
    this.sum++;
    if(this.sum % 2 == 0 ){
      this.nowUser = "turn : Player1";
    }else{
      this.nowUser = "turn : Player2";
    }
  }

  rollButton(){
    if(this.rollCount < 1){
      for (let i = 0; i < this.diceBool.length; i++) {
        if(this.diceBool[i]){
          this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
        }
      }
      this.rollCount++;
    }else if(this.rollCount == 1){
      for (let i = 0; i < this.diceBool.length; i++) {
        if(this.diceBool[i]){
          this.dice[i] = Math.floor( Math.random() * (this.max + 1 - this.min) ) + this.min ;
        }
      }
      this.rollCount = 0;
      this.rollButtom = "STOP";
      this.rollStop = true;
    }
    this.onesClass();
    this.twosClass();
    this.threesClass();
    this.foursClass();
    this.fivesClass();
    this.sixesClass();
    this.chanceClass();
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

  onesClass(){
    this.Player1.ones = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if(this.dice[i] == 1){
        this.Player1.ones += this.dice[i];
      }
    }
  }

  twosClass(){
    this.Player1.twos = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if(this.dice[i] == 2){
        this.Player1.twos += this.dice[i];
      }
    }
  }

  threesClass(){
    this.Player1.threes = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if(this.dice[i] == 3){
        this.Player1.threes += this.dice[i];
      }
    }
  }

  foursClass(){
    this.Player1.fours = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if(this.dice[i] == 4){
        this.Player1.fours += this.dice[i];
      }
    }
  }

  fivesClass(){
    this.Player1.fives = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if(this.dice[i] == 5){
        this.Player1.fives += this.dice[i];
      }
    }
  }

  sixesClass(){
    this.Player1.sixes = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if(this.dice[i] == 6){
        this.Player1.sixes += this.dice[i];
      }
    }
  }

  chanceClass(){
    this.Player1.chance = 0;
    for (let i = 0; i < this.dice.length; i++) {
      this.Player1.chance += this.dice[i];
    }
  }

}
