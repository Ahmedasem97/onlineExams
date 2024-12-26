import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectQuizesService } from '../../../services/subject-quizes.service';
import { ObjectSubjects } from '../../../interfaces/subjects';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quizes-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quizes-cards.component.html',
  styleUrl: './quizes-cards.component.scss'
})
export class QuizesCardsComponent implements OnInit, OnDestroy {
  constructor(
    private _SubjectQuizesService: SubjectQuizesService
  ) { }
  getAllSubject!: ObjectSubjects[]

  quizesApiDestroy!: Subscription

  ngOnInit(): void {
    this.quizesApiDestroy = this._SubjectQuizesService.getAllSubjects().subscribe({
      next: res => {
        console.log(res);
        this.getAllSubject = res.subjects

      },
      error: err => {
        console.log(err);

      }
    })
  }

  ngOnDestroy(): void {
    this.quizesApiDestroy.unsubscribe()
  }

}
