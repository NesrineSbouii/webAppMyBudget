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
}