import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { MessagesModule } from 'primeng/messages';
import { AuthLipService } from 'auth-lip';
import { Router, RouterLink } from '@angular/router';
import { ApiResponseErrorComponent } from "../api-response-error/api-response-error.component";
import { ToastModule } from 'primeng/toast';
import { ToasterNgService } from '../../../shared/services/toaster-ng.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ToastModule, ReactiveFormsModule, ButtonComponent, PasswordModule, InputTextModule, ErrorMessageComponent, MessagesModule, RouterLink, ApiResponseErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private _AuthLipService: AuthLipService,
    private _Router: Router,
    private _ToasterNgService:ToasterNgService
  ) { }



  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(4), Validators.maxLength(20)]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    lastName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, this.confirmPassword)

  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
    } else {
      return { mismatch: true }
    }
  }
  isDisabled: boolean = false
  errMessage!: string


  registerSumbit(): void {
    if (this.registerForm.valid) {
      this.isDisabled = true
      this._AuthLipService.register(this.registerForm.value).subscribe({
        next: res => {
          this._ToasterNgService.toasterSecsses(res.message)
          this.isDisabled = false
          console.log(res);
          this.errMessage = ''
          this._Router.navigate(['/auth/login'])
        },
        error: err => {
          this.isDisabled = false
          this.errMessage = err.error.message
        }
      })
    } else {
      this.registerForm.markAllAsTouched()
    }



  }


}
