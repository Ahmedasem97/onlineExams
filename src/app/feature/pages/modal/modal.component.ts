import { AfterContentChecked, AfterContentInit, AfterRenderRef, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { QuestionsService } from '../../services/questions.service';
import { Question } from '../../interfaces/questions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() examId!: string
  @ViewChildren('balls') balls!: QueryList<ElementRef>

  constructor(
    private _QuestionsService: QuestionsService,
    private _Renderer2:Renderer2
  ) { }

  section1: boolean = true
  section2: boolean = false
  section3: boolean = false

  minutes: number = 15; // وقت البداية بالدقائق
  seconds: number = 0; // وقت البداية بالثواني
  countdownInterval: any;

  questionArray: Question[] = []
  indexOfArray: number = 0

  startSection2(): void {
    this.section1 = false
    this.section2 = true

    this._QuestionsService.getQuestions(this.examId).subscribe({
      next: res => {
        console.log(res.questions);
        this.questionArray = res.questions
        console.log(this.balls);
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

  nextBtn() {
    if (this.indexOfArray < this.questionArray.length - 1) {
      this.indexOfArray = this.indexOfArray + 1
      this._Renderer2.setStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color", "var(--main-color)")
    }


  }
  backBtn() {
    if (this.indexOfArray > 0) {
      this._Renderer2.removeStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color")
      this.indexOfArray = this.indexOfArray - 1

    }
  }

}
