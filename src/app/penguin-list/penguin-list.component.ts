import { Component, OnInit } from '@angular/core';
import { PENGUINS } from '../model/penguins';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { PenguinlistClickService } from '../services/penguinlist-click.service';

@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.scss'],
})
export class PenguinListComponent implements OnInit {

  penguins = PENGUINS;

  constructor(private service: PenguinlistClickService
    ) {
     console.log('constructor');
    }
  
    ngOnInit() {
      console.log('ngOnInit');
    }

  click(penguin: any){
    this.service.setClick(penguin);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.penguins, event.previousIndex, event.currentIndex);
  }

}
