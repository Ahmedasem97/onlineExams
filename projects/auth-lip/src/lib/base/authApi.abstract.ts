import { Observable } from "rxjs";


export abstract class AuthApi {
    abstract login (data: any): Observable<any>;
    abstract register (data: any): Observable<any>;
    abstract forgetPassword (data: any): Observable<any>;
    abstract verifyResetCode (data: any): Observable<any>;
    abstract ResetPassword (data: any): Observable<any>;




}