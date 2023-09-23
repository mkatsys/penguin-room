import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
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

  constructor(private firestore : Firestore) {
    // const itemCollection = collection(this.firestore, 'items');
    // this.item$ = collectionData(itemCollection);
  }

  addData(f:any){
    console.log(f.value);
    //コレクション'users'接続
    const collectionInstance = collection(this.firestore, 'users');
    //データ追加
    addDoc(collectionInstance, f.value).then(() =>{
      console.log('Data Saved Successfully');
    }).catch((err) =>{
      //Missing or insufficient permissions. の場合、firestore databaseのtimestampの日付を書き換える
      console.log(err);
    })
  }

  getData(){
    
  }
}
