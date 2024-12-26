import { Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { QuestionsService } from '../../services/questions.service';
import { Question, wrongAnswer } from '../../interfaces/questions';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() examId!: string
  @Input() examDuration!:number
  @ViewChildren('balls') balls!: QueryList<ElementRef>
  @Output() modal:EventEmitter<boolean> = new EventEmitter()

  constructor(
    private _QuestionsService: QuestionsService,
    private _Renderer2:Renderer2
  ) { }

  section1: boolean = true
  section2: boolean = false
  section3: boolean = false
  section4: boolean = false
  btnText:string = "Next"
  isDisabled:boolean = true

  minutes!: number; // وقت البداية بالدقائق
  seconds: number = 0; // وقت البداية بالثواني
  countdownInterval: any;

  correctAnswer:number = 0
  incorrectAnswer:number = 0

  questionArray: Question[] = []
  indexOfArray: number = 0
  answersArray: any[] = []
  wrongAnswer: wrongAnswer[] = []

  startSection2(): void {
    this.section1 = false
    this.section2 = true
    
    this._QuestionsService.getQuestions(this.examId).subscribe({
      next: res => {
        console.log(res.questions);
        this.questionArray = res.questions
        this.minutes = this.examDuration
        this.startCountdown();
      },
      error: err => {
        console.log(err);

      }
    })
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          // إنهاء العداد
          clearInterval(this.countdownInterval);
          this.section2 = false
          this.section3 = true
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000); 
  }

  getTheKey(answer:string, correctAnswer:string) {
    console.log(answer, correctAnswer);
    this.answersArray.splice(this.indexOfArray, 1 , {'answer':answer, 'correctAnswer':correctAnswer , 'fullQuestion': this.questionArray[this.indexOfArray]})
    console.log(this.answersArray);

    this.isDisabled === false

  }

  getScore (){
    this.answersArray.forEach(answer => {
      if (answer.answer == answer.correctAnswer) {
        this.correctAnswer++
      }else {
        this.incorrectAnswer++
      }
    })
  }

  nextBtn() {
    if (this.indexOfArray < this.questionArray.length - 1) {
      this.indexOfArray = this.indexOfArray + 1
      this._Renderer2.setStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color", "var(--main-color)")
    }else {
      this.section2 = false
      this.section3 = true
      this.getScore()
    }
    if (this.indexOfArray == this.questionArray.length - 1){
      this.btnText = "finished"
    }

  }
  backBtn() {
    if (this.indexOfArray > 0) {
      this._Renderer2.removeStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color")
      this.indexOfArray = this.indexOfArray - 1

    }
  }


  closeModal (){
    this.modal.emit(false)
  }
 
  showResult (){
    this.wrongAnswer = this.answersArray.filter(q => {
      return q.answer !== q.correctAnswer
    })
    console.log(this.wrongAnswer);
    this.section3 = false
    this.section4 = true
    this.wrongAnswer.forEach(question => {
      question.fullQuestion.answers.forEach (edit => {
        if (edit.key == question.answer) {
          console.log(edit.key);
          
        }else if (edit.key == question.correctAnswer) {
          console.log(edit.key);
          
        }
      })
    })
  }


}
