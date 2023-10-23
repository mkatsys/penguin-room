import { CommonModule  } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';

interface Item {
  name: string,
  pass: number
};

@Component({
  selector: 'app-penguin-login',
  templateUrl: './penguin-login.component.html',
  styleUrls: ['./penguin-login.component.scss'],
})
export class PenguinLoginComponent {
  // item$: Observable<Item[]>;
  // firestore: Firestore = inject(Firestore);

  //!を使うことで、変数を使う時までにその変数に値が割り当てられていることをコンパイラに明示できる
  //変数が割り当てられななった場合に気づけなくなるため、基本的にあまり使わない方が良い
  userData: Observable<any> | undefined;

  constructor(private firestore : Firestore) {
    // const itemCollection = collection(this.firestore, 'items');
    // this.item$ = collectionData(itemCollection);
    this.getData();
  }

  addData(f:any){
    //連想配列
    console.log('f');
    console.log(f);
    //ランダム
    var min = 1 ;
    var max = 19 ;
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    //
    f.value["random"] = a;
    //コレクション'users'接続
    const collectionInstance = collection(this.firestore, 'users');
    //データ追加
    addDoc(collectionInstance, f.value).then(() =>{
      console.log('Data Saved Successfully');
    }).catch((err) =>{
      //Missing or insufficient permissions. の場合、firestore databaseのtimestampの日付を書き換える
      console.log(err);
    })
    console.log('e');
  }

  getData(){
    //コレクション'users'接続
    const collectionInstance = collection(this.firestore, 'users');
    //subscribe 状態の変化を自動的に通知する
    collectionData(collectionInstance, { idField: 'id' }).subscribe(val =>{
      console.log(val);
    });
    // this.userData = collectionData(collectionInstance);
    this.userData = collectionData(collectionInstance, { idField: 'id' });
  }

  updateData(id : string){
    const docInstance = doc(this.firestore, 'users', id);
    const updateData = {
      name : 'updatedName'
    }
    //データ更新
    updateDoc(docInstance, updateData).then(() =>{
      console.log('Data updated Successfully');
    }).catch((err) =>{
      //Missing or insufficient permissions. の場合、firestore databaseのtimestampの日付を書き換える
      console.log(err);
    })
  }

  deleteData(id : string){
    const docInstance = doc(this.firestore, 'users', id);
    deleteDoc(docInstance).then(() =>{
      console.log('Data deleted Successfully');
    }).catch((err) =>{
      //Missing or insufficient permissions. の場合、firestore databaseのtimestampの日付を書き換える
      console.log(err);
    })
  }
}
