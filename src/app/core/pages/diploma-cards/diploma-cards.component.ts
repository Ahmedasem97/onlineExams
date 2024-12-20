import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { ExmasService } from '../../services/exmas.service';
import { ActivatedRoute } from '@angular/router';
import { AllExamsRes, Exams, ResExams } from '../../interfaces/exams';
import { ModalComponent } from "../../../feature/pages/modal/modal.component";

@Component({
  selector: 'app-diploma-cards',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './diploma-cards.component.html',
  styleUrl: './diploma-cards.component.scss'
})
export class DiplomaCardsComponent implements OnInit {

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ExmasService: ExmasService
  ) { }


  modal: boolean = false
  diplomaRes!: Exams[]
  selectedExamId!: string;


  imageLoaded: boolean = false; // حالة تحميل الصورة

  subjectParamId!: any

  ngOnInit(): void {
    // get id in link
    this._ActivatedRoute.paramMap.subscribe({
      next: param => {
        this.subjectParamId = param.get("id")
      }
    })

    // get api
    this._ExmasService.getAllExamsOnSubject(this.subjectParamId).subscribe({
      next: (res: ResExams) => {
        console.log(res.exams);

        this.diplomaRes = res.exams

      }
    })
  }

  startQuiz(id:string): void {
    this.selectedExamId = id
    this.modal = true
    
  }


}
