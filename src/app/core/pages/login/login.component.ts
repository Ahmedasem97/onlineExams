import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthLipService } from 'auth-lip';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { ApiResponseErrorComponent } from "../api-response-error/api-response-error.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ PasswordModule, InputTextModule, ReactiveFormsModule, RouterLink, ButtonComponent, ErrorMessageComponent, ApiResponseErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(
    private _AuthLipService: AuthLipService,
    private _Router:Router
  ) { }


  errMessage!: string
  isDisabled: boolean = false



  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  loginSumbit(): void {
    if (this.loginForm.valid) {
      this.isDisabled = true
      this._AuthLipService.login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem("token", res.token)
          this._AuthLipService.userToken()
          this._Router.navigate(["/exams"])
          this.isDisabled = false
          this.errMessage = ''
          console.log(res);

        },
        error: (err) => {
          console.log(err);

          this.errMessage = err.error.message
          this.isDisabled = false
        }
      })
    } else {
      this.loginForm.markAllAsTouched()
    }



  }

}
