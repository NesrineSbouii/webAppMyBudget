import { Inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Entity } from '../models/entity';

@Injectable({
  providedIn: 'root',
})

export class CrudService<T extends Entity> {
  protected collection: AngularFirestoreCollection<T>;
  protected document: AngularFirestoreDocument<T>;

  constructor(
    protected afs: AngularFirestore,
    protected snackBService: SnackBarService,
    protected authService: Auth,
    @Inject(String) private collectionName: string,
  ) {
    this.collection = this.afs.collection<T>(this.collectionName, collection => collection.where('refId', '==', this.authService.currentUser?.uid));
  }

  list(): Observable<T[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  get(id: string): Observable<T | any> {
    this.document = this.afs.doc<T>(`${this.collectionName}/${id}`);
    return this.document.valueChanges();
  }

  add(item: T): void {
    this.collection.add({ ...item, refId: this.authService.currentUser?.uid })
      .then(() => this.snackBService.dataChange.next({ operation: 'add', type: 'success' }))
      .catch((error: string) => {
        this.snackBService.dataChange.next({ operation: 'add', type: error });
      });;
  }

  update(item: T): void {
    this.document = this.afs.doc<T>(`${this.collectionName}/${item.id}`);
    this.document.update(item)
      .then(() => this.snackBService.dataChange.next({ operation: 'update', type: 'success' }))
      .catch((error: string) => {
        this.snackBService.dataChange.next({ operation: 'update', type: error });
      });;
  }

  delete(id: string): void {
    this.collection.doc(id).delete()
      .then(() => this.snackBService.dataChange.next({ operation: 'delete', type: 'success' }))
      .catch((error: string) => {
        this.snackBService.dataChange.next({ operation: 'delete', type: error });
      });
  }
}