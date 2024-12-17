import { Component } from '@angular/core';
import { QuizesCardsComponent } from "./quizes-cards/quizes-cards.component";

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [QuizesCardsComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss'
})
export class QuizesComponent {

}
