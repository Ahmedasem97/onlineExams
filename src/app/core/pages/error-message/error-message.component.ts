import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ErrorMessage } from '../../interfaces/error-message';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [MessagesModule],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
@Input({required:true}) errorText!:ErrorMessage[] 
@Input({required:true}) formGroupErr!:FormGroup 
@Input({required:true}) formControlErr!:string 

}
