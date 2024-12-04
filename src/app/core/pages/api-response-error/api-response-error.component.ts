import { Component, Input } from '@angular/core';
import { MessagesModule } from 'primeng/messages';



@Component({
  selector: 'app-api-response-error',
  standalone: true,
  imports: [MessagesModule],
  templateUrl: './api-response-error.component.html',
  styleUrl: './api-response-error.component.scss'
})
export class ApiResponseErrorComponent {
@Input() apiResponeErr!:string
@Input() apiResponeSuccsse!:string


}
