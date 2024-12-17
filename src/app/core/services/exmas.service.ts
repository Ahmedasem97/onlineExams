import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectEndPoint } from '../api-end-point/subjects-end-point';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExmasService {

  constructor(
    private _HttpClient: HttpClient
  ) { }

  getAllExamsOnSubject(id: string): Observable<any> {
    return this._HttpClient.get(SubjectEndPoint.allExamsOnSubject + id)
  }


}
