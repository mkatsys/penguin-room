import { Component, OnInit } from '@angular/core';
import { AquariumService } from '../services/aquarium.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { getStorage, ref, uploadBytes } from "firebase/storage";

@Component({
  selector: 'app-aquarium-add',
  templateUrl: './aquarium-add.component.html',
  styleUrls: ['./aquarium-add.component.scss'],
})
export class AquariumAddComponent implements OnInit {
  successComent = "";

  constructor(private aquariumService: AquariumService) {
    }
  ngOnInit() {
  }
  addData(f:any){
    this.aquariumService.addAquarium(f);
    this.successComent = "add complete!!";
    f.resetForm();
  }
  getFiles(event : any){
    const file = event.target.files[0];
    const path = file.name;
    console.log(path);
  }
}
