import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HomeService {
  
  constructor(
    protected afs: AngularFirestore,
  ) {
  }


  getProjects(): Observable<any> {
    return this.afs.doc('projects').valueChanges()
  }

  getGroups(): Observable<any> {
    return this.afs.doc('groups').valueChanges()
  }

  getCategories(): Observable<any> {
    return this.afs.doc('categories').valueChanges()
  }
}