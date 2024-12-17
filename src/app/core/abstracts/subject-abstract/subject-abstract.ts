import { Observable } from "rxjs";
import { ResSubjects, SingleSubject } from "../../interfaces/subjects";

export abstract class SubjectAbstract {
    abstract getAllSubjects(): Observable<ResSubjects>
    abstract getSingleSubject(id:string): Observable<SingleSubject>
}