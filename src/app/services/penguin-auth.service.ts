import { Injectable, Optional } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PenguinAuthService {

  constructor(private fs : Firestore) {
    
  }

  getNote(){
    let notesCollection = collection(this.fs, 'notes');
    return collectionData(notesCollection,{idField:'id'});
  }

  addNote(desc:string){
    let data = {description:desc};
    let notesCollection = collection(this.fs, 'notes');
    return addDoc(notesCollection, data).then(() =>{
      console.log('Data Saved Successfully');
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteNote(id:string){
    let docRef = doc(this.fs,'notes/'+id);
    return deleteDoc(docRef);
  }

  login(){

  }

  logout(){

  }
}
