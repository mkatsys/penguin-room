import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AquariumService } from '../services/aquarium.service';

@Component({
  selector: 'app-aquarium-list',
  templateUrl: './aquarium-list.component.html',
  styleUrls: ['./aquarium-list.component.scss']
})
export class AquariumListComponent implements OnInit {
  aquarium : any;
  // // トータルデータ件数
  // total_counts =0;
  // // 1ページの記事の表示数
  // page_max_data = 6;
  // // トータルページ数
  // max_page =0;
  // // 今のページ数
  // now_page = 1;
  
  constructor(private firestore : Firestore, private aquariumService: AquariumService) {
  }
  ngOnInit() {
    this.getAquarium();
    console.log("this.aquarium");
    console.log(this.aquarium);
  }
  getAquarium(){
    //コレクション'users'接続
    const collectionInstance = collection(this.firestore, 'aquarium');
    //subscribe 状態の変化を自動的に通知する
    collectionData(collectionInstance, { idField: 'id' }).subscribe(val =>{
      console.log(val);
      this.aquarium = val;
      // //Object.keys(myColorList).length
      // this.total_counts = val.length;
      // console.log(this.total_counts);
      // this.max_page = Math.ceil(this.total_counts/this.page_max_data);
      // console.log(this.max_page);
      // val.slice( 0, 6 );
      // console.log(val);
    });
    // this.userData = collectionData(collectionInstance);
    // this.aquarium = collectionData(collectionInstance, { idField: 'id' });
  }

  click(aquarium: any){
    this.aquariumService.setClick(aquarium);
  }
}
