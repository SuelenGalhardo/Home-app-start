import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housingLocation/housingLocation.component';
import { HousingLocation } from '../housingLocation';
import { HousingService}  from  '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
   <section>
    <form >
      <input class="inputForm" type="text" placeholder="Buscar por ciudad">
      <button class="primary" type="button">Buscar</button>
    </form>

   </section>
   <section class="results">
    <app-housingLocation *ngFor=" let housingLocation of housingLocationList" [housingLocation] ="housingLocation"></app-housingLocation>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
    

}
