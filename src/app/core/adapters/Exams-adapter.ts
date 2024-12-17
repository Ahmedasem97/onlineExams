import { Injectable } from '@angular/core';
import { AllobjectSubjects, AllResSubjects, AllSingleSubject, ResSubjects, SingleSubject } from '../interfaces/subjects';

@Injectable({
  providedIn: 'root'
})
export class ExamsAdapter {

  constructor() { }

  allSubjectAdapt(data: AllResSubjects): ResSubjects {
    return {
      metadata: {
        currentPage: data.metadata.currentPage,
        numberOfPages: data.metadata.numberOfPages,
        limit: data.metadata.limit
      },

      subjects: data.subjects.map((res:AllobjectSubjects) => ({
        _id: res._id,
        name: res.name,
        icon: res.icon
      }))
    }
  }


  singleSubjectAdapt (data:AllSingleSubject):SingleSubject{
    return {
      category: {
        _id: data.category._id,
        name: data.category.name,
        icon: data.category.icon
      }
    }
  }

}
