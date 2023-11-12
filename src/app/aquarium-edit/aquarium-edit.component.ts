import { Component } from '@angular/core';
import { AquariumService } from '../services/aquarium.service';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-aquarium-edit',
  templateUrl: './aquarium-edit.component.html',
  styleUrls: ['./aquarium-edit.component.scss']
})
export class AquariumEditComponent {
  aquarium: any ;

  constructor(private firestore : Firestore,private aquariumService: AquariumService) {
    this.aquarium = this.aquariumService.getClick();
  }
  editData(f:any){
    this.aquariumService.updateAquarium(this.aquarium.id , f);
    //listに戻る処理
  }
}
