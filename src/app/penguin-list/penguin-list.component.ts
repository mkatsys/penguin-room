import { Component, OnInit } from '@angular/core';
import { PENGUINS } from '../model/penguins';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { PenguinlistClickService } from '../services/penguinlist-click.service';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.scss'],
})
export class PenguinListComponent implements OnInit {

  penguins = PENGUINS;
  selectedValue: string | undefined;
  penguinslist : string[] = [];
  // penguinslist = this.penguins.slice(0, this.penguins.length);
  penguinslistTentative = "";

  constructor(private service: PenguinlistClickService
    ) {
     console.log('constructor');
    }
  
    ngOnInit() {
      console.log('ngOnInit');
      let number = 0;
      for (let i = 0; i < this.penguins.length; i++) {
        if(this.penguinslistTentative  != this.penguins[i].types){
          console.log(this.penguinslistTentative);
          this.penguinslist[number] = this.penguins[i].types;
          number++;
          console.log(number);
          this.penguinslistTentative  = this.penguins[i].types;
        }
      }
      console.log(this.penguinslist);
    }

  click(penguin: any){
    this.service.setClick(penguin);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.penguins, event.previousIndex, event.currentIndex);
  }

}
