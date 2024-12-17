import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text!:string;
  @Input() classes:string = 'w-full'
  @Input() divClasses!:string
  

}
