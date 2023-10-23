import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AquariumService {
  date = new Date();
  aquarium : any;
  updateaquarium : any;

  constructor(private firestore : Firestore) { }

  setClick(aquariumId : any) {
    this.aquarium = aquariumId;
  }

  getClick() {
    return this.aquarium;
  }

  addAquarium(f:any){
    //連想配列
    console.log('aquarium start');
    console.log(f);
    console.log(f.value);
    f.value["addDate"] = this.date;
    //コレクション'aquarium'接続
    const collectionInstance = collection(this.firestore, 'aquarium');
    //データ追加
    addDoc(collectionInstance, f.value).then(() =>{
      console.log('Data Saved Successfully');
    }).catch((err) =>{
      //Missing or insufficient permissions. の場合、firestore databaseのtimestampの日付を書き換える
      console.log(err);
    })
    console.log('aquarium finish');
  }

  updateAquarium(id : string, f:any){
    const docInstance = doc(this.firestore, 'aquarium', id);
    const updateData = {
      aquariumName : 'updatedName'
    }
    //データ更新
    updateDoc(docInstance, updateData).then(() =>{
      console.log('aquariumData updated Successfully');
    }).catch((err) =>{
      //Missing or insufficient permissions. の場合、firestore databaseのtimestampの日付を書き換える
      console.log(err);
    })
  }
}


