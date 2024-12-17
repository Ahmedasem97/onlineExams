import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { ExmasService } from '../../services/exmas.service';
import { ActivatedRoute } from '@angular/router';
import { AllExamsRes, Exams } from '../../interfaces/exams';

@Component({
  selector: 'app-diploma-cards',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './diploma-cards.component.html',
  styleUrl: './diploma-cards.component.scss'
})
export class DiplomaCardsComponent implements OnInit{

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ExmasService:ExmasService
  ){}

  DiplomaRes!:Exams[]

  imageLoaded: boolean = false; // حالة تحميل الصورة

  
  ngOnInit(): void {
    let paramId:any
    // get id in link
      this._ActivatedRoute.paramMap.subscribe({
        next: param => {
          paramId = param.get("id")
        }
      })

      // get api
      this._ExmasService.getAllExamsOnSubject(paramId).subscribe({
        next: (res:AllExamsRes) => {
          console.log(res.exams);
          
          this.DiplomaRes = res.exams
          
        }
      })
  }


}
