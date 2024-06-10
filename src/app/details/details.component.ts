import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housingLocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `


   <article >
    <img class="listing-photo" [src]="housingLocation?.photo" alt="">
    <section class="listing-heading"></section>
    <h2 class="listing-heading">{{housingLocation?.name}}</h2>
    <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    <section class="listing-features">
    <h2 class=" section-heading">About this housing location</h2>
    <ul>
      <li>Units available: {{housingLocation?.availableUnits}}</li>
      <li> Does this location have wifi: {{housingLocation?.wifi}}</li>
      <li> Does this location have laundry: {{housingLocation?.laundry}}</li>
    </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live</h2>
      <button class="primary" type="button">Apply now </button>

    <form [formGroup]="applyForm" (submit)= "submitApplication()" >
    <label for="first-name">  First Name </label>
    <input type="text" id="first-name" formControlName="">

    <label for="last-name">  Last Name </label>
    <input type="text" id="last-name" formControlName="lastName">

    <label for="email">  Email </label>
    <input type="text" id="email" formControlName="email">
    <button class="primary" type="submit">Apply now </button>
    </form>
    </section>
   </article>

  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject (HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({ 
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
   
  })


  constructor() {
     const housingLocationId = Number(this.route.snapshot.params['id']);
     this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName?? '',
      this.applyForm.value.email?? '',
    
    )
  }
}
