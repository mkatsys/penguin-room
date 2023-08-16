import { Component, OnInit } from '@angular/core';
import { PENGUINS } from '../model/penguins';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.scss'],
})
export class PenguinListComponent implements OnInit {

  penguins = PENGUINS;

  constructor(
    ) {
     console.log('constructor');
    }
  
    ngOnInit() {
      console.log('ngOnInit');
    }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.penguins, event.previousIndex, event.currentIndex);
  }

}
