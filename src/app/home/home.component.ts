import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section>
    <form >
      <input class="inputForm" type="text" placeholder="Buscar por ciudad">
      <button class="primary" type="button">Buscar</button>
    </form>

   </section>
   <section class="results"></section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
