import { Component } from '@angular/core';
import { DiplomaCardsComponent } from "../diploma-cards/diploma-cards.component";

@Component({
  selector: 'app-diploma',
  standalone: true,
  imports: [DiplomaCardsComponent],
  templateUrl: './diploma.component.html',
  styleUrl: './diploma.component.scss'
})
export class DiplomaComponent {

}
