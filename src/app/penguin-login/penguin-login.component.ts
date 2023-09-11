import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
  pass: number
};

@Component({
  selector: 'app-penguin-login',
  templateUrl: './penguin-login.component.html',
  styleUrls: ['./penguin-login.component.scss']
})
export class PenguinLoginComponent {
  // item$: Observable<Item[]>;
  // firestore: Firestore = inject(Firestore);

  constructor() {
    // const itemCollection = collection(this.firestore, 'items');
    // this.item$ = collectionData(itemCollection);
  }

  addData(f:any){
    console.log(f.value);
  }
}
