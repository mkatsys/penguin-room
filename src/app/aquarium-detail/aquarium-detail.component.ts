import { Component } from '@angular/core';
import { AquariumService } from '../services/aquarium.service';

@Component({
  selector: 'app-aquarium-detail',
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.scss']
})
export class AquariumDetailComponent {
  aquarium: any ;

  constructor(private aquariumService: AquariumService) {
    this.aquarium = this.aquariumService.getClick();
  }
}
