import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResSubjects, SingleSubject } from '../interfaces/subjects';
import { ExamsAdapter } from '../adapters/Exams-adapter';
import { SubjectEndPoint } from '../api-end-point/subjects-end-point';
import { SubjectAbstract } from '../abstracts/subject-abstract/subject-abstract';

@Injectable({
  providedIn: 'root'
})
export class SubjectQuizesService implements SubjectAbstract{

  constructor(
    private _HttpClient:HttpClient,
    private _ExamsAdapter:ExamsAdapter
  ) { }

  getAllSubjects ():Observable<ResSubjects> {
    return this._HttpClient.get(SubjectEndPoint.getAllSubject).pipe(
      map((res:any) => this._ExamsAdapter.allSubjectAdapt(res))
    )
  }

  getSingleSubject (id:string):Observable<SingleSubject> {
    return this._HttpClient.get(SubjectEndPoint.getSingleSubject + id).pipe(
      map((res:any) => this._ExamsAdapter.singleSubjectAdapt(res))
    )
  }
}
