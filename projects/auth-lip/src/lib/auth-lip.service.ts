import { Injectable } from '@angular/core';
import { AuthApi } from './base/authApi.abstract';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from './enums/Auth.endpoint';
import { AuthAPIAdapter } from './adapter/auth_api.adapter';
import { LoginUserData } from './interfaces/login-user-data';
import { LoginApiResponse, LoginResponse } from './interfaces/loginResponse';
import { RegisterUserData } from './interfaces/register-user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthLipService implements AuthApi {

  constructor(
    private _httpClient:HttpClient,
    private _AuthAPIAdapter:AuthAPIAdapter
  ) { }

  login(data: LoginUserData): Observable<LoginResponse> {
      return this._httpClient.post(ApiEndpoint.LOGIN , data).pipe(
        map( (res:any) => this._AuthAPIAdapter.loginAdapter(res)),
        
      )
  }

  register(data: RegisterUserData): Observable<any> {
      return this._httpClient.post(ApiEndpoint.REGISTER , data).pipe(
        map((res:any) => this._AuthAPIAdapter.registerAdapter(res))
      )
  }


  forgetPassword (data: any): Observable<any> {
    return this._httpClient.post(ApiEndpoint.FORGET_PASSWORD , data)
  }

  verifyResetCode (data: any): Observable<any> {
    return this._httpClient.post(ApiEndpoint.VERIFY_RESET_CODE , data)
  }

  ResetPassword (data: any): Observable<any> {
    return this._httpClient.put(ApiEndpoint.RESET_PASSWORD , data)
  }










}
