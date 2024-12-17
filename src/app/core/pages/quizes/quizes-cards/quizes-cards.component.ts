import { Component, OnInit } from '@angular/core';
import { SubjectQuizesService } from '../../../services/subject-quizes.service';
import { ObjectSubjects } from '../../../interfaces/subjects';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quizes-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quizes-cards.component.html',
  styleUrl: './quizes-cards.component.scss'
})
export class QuizesCardsComponent implements OnInit{
constructor (
  private _SubjectQuizesService:SubjectQuizesService
){}
getAllSubject!:ObjectSubjects[]

ngOnInit(): void {
    this._SubjectQuizesService.getAllSubjects().subscribe({
      next:res => {
        console.log(res);
        this.getAllSubject = res.subjects
        
      },
      error: err => {
        console.log(err);
        
      }
    })
}



}
