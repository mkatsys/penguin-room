import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PENGUINS } from '../model/penguins';
// import { PENGUINSINTERFACE } from '../interfaces/penguin-interface';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { PenguinlistClickService } from '../services/penguinlist-click.service';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
// import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.scss'],
})
export class PenguinListComponent implements OnInit {

  penguins = PENGUINS;
  penguinsSearch = this.penguins.map( list => ({...list}));
  // penguinsSearch = Object.assign({}, JSON.parse(JSON.stringify(this.penguins)));
  selectedValue: string | undefined;
  penguinslist : string[] = [];
  // penguinslist = this.penguins.slice(0, this.penguins.length);
  penguinslistTentative = "";

  penguinsInterface = { name: '', types: '' };

  constructor(private service: PenguinlistClickService
    ) {
     console.log('constructor');
     console.log(this.penguins);
     console.log(this.penguinsSearch);
    }
  
    ngOnInit() {
      console.log('ngOnInit');
      let number = 0;
      for (let i = 0; i < this.penguins.length; i++) {
        if(this.penguinslistTentative  != this.penguins[i].types){
          this.penguinslist[number] = this.penguins[i].types;
          number++;
          this.penguinslistTentative  = this.penguins[i].types;
        }
      }
      console.log(this.penguinslist);
    }

  click(penguin: any){
    this.service.setClick(penguin);
  }
  onSubmit(){
    console.log('onSubmit');
    let name = this.penguinsInterface.name;
    let types = this.penguinsInterface.types;

    if(!types){
      types = "";
    }

    if(name == "" && types == ""){
      this.penguinsSearch = PENGUINS.map( list => ({...list}));
    }else{
      let number = 0;
      for (let i = 0; i < this.penguins.length; i++) {
        if(name != "" && types != ""){
          if(this.penguins[i].name.includes(name) && this.penguins[i].types == types){
            this.penguinsSearch[number] = this.penguins[i]
            number++;
          }
        }else if(name != ""){
          if(this.penguins[i].name.includes(name)){
            this.penguinsSearch[number] = this.penguins[i]
            number++;
          }
        }else if(types != ""){
          if(this.penguins[i].types == types){
            this.penguinsSearch[number] = this.penguins[i]
            number++;
          }
        }
      }
      this.penguinsSearch.length = number;
    }
  }

}
