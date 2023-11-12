import { Component } from '@angular/core';
import { AquariumService } from '../services/aquarium.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-aquarium-detail',
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.scss']
})
export class AquariumDetailComponent {
  aquarium: any ;

  constructor(private aquariumService: AquariumService) {
    this.aquarium = this.aquariumService.getClick();
    console.log(this.aquarium);
  }
  click(){
    this.aquariumService.deleteAquarium(this.aquarium.id);
  }
}
