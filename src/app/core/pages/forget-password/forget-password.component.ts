import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthLipService } from 'auth-lip';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { ApiResponseErrorComponent } from "../api-response-error/api-response-error.component";
import { PasswordModule } from 'primeng/password';
import { Router, RouterLink } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToasterNgService } from '../../../shared/services/toaster-ng.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ToastModule ,RouterLink, PasswordModule, MessagesModule, ApiResponseErrorComponent, InputTextModule, ErrorMessageComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnDestroy{

  constructor(
    private _AuthLipService: AuthLipService,
    private _Router:Router,
    private _ToasterNgService:ToasterNgService
  ) {}


  errMessage!: string
  succsesMessage!: string
  isDisabled: boolean = false

  step1: boolean = true
  step2: boolean = false
  step3: boolean = false

  forgetApiDestroy!:Subscription
  verifyCodeApiDestroy!:Subscription
  ResendCodeApiDestroy!:Subscription
  setPasswordApiDestroy!:Subscription


  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  })

  fogetPasswordSumbit(): void {
    if (this.forgetPasswordForm.valid) {
      this.isDisabled = true
      this._AuthLipService.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next: (res) => {
          this._ToasterNgService.toasterSecsses(res.info)
          this.step1 = false
          this.step2 = true
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
    }
    else{
      this.forgetPasswordForm.markAllAsTouched()
    }
  }




  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  })

  verifyCodeSumbit(): void {
    if (this.verifyCode.valid) {
      this.isDisabled = true
      this._AuthLipService.verifyResetCode(this.verifyCode.value).subscribe({
        next: (res) => {
          this._ToasterNgService.toasterSecsses(res.status)
          this.step2 = false
          this.step3 = true
          this.errMessage = ''
          this.succsesMessage = ''
          this.isDisabled = false
          console.log(res);
  
        },
        error: (err) => {
          console.log(err);
          this.errMessage = err.error.message
          this.isDisabled = false
        }
      })
    }else{
      this.verifyCode.markAllAsTouched()
    }

  }

  ResendCode(){
    this._AuthLipService.forgetPassword(this.forgetPasswordForm.value).subscribe({
      next: (res) => {
        this._ToasterNgService.toasterSecsses(res.info)
        this.succsesMessage = res.message
        console.log(res);

      },
      error: (err) => {
        console.log(err);

        this.errMessage = err.error.message
        this.isDisabled = false
      }
    })
  }



  setPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
  }, this.confirmPassword)

  confirmPassword(g: AbstractControl) {
    if (g.get('newPassword')?.value === g.get('rePassword')?.value) {
      return null
    } else {
      return { mismatch: true }
    }
  }


  setPasswordSumbit(): void {
    if (this.setPassword.get('newPassword')?.valid || this.setPassword.get('rePassword')?.valid) {
      this.isDisabled = true
      let resetPasswordObject = {
        'email': this.forgetPasswordForm.value.email,
        "newPassword": this.setPassword.value.newPassword
      }
      
      this._AuthLipService.ResetPassword(resetPasswordObject).subscribe({
        next: (res) => {
          this._ToasterNgService.toasterSecsses(res.message)
          this.errMessage = ''
          console.log(res);
          this.succsesMessage = res.message
          this.isDisabled = false
          this._Router.navigate(['/auth/login'])
          this.succsesMessage = res.message
        },
        error: (err) => {
          console.log(err);
          console.log(err);
          
          this.errMessage = err.error.message
          this.isDisabled = false
        }
      })
    }else {
      this.setPassword.markAllAsTouched()
    }
  }

  ngOnDestroy(): void {
      this.forgetApiDestroy.unsubscribe()
      this.ResendCodeApiDestroy.unsubscribe()
      this.verifyCodeApiDestroy.unsubscribe()
      this.setPasswordApiDestroy.unsubscribe()
  }

}
