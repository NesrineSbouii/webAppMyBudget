import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { User } from '../models/user';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CrudService<User> {
  constructor(afs: AngularFirestore, snackBService: SnackBarService) {
    super(afs, snackBService, 'users');
  }

  getUserBy(key: string, value?: string): Observable<User> {
    return this.afs
      .collection('users', (ref) => ref.where(key, '==', value))
      .valueChanges({ idField: 'id' })
      .pipe(
        map((users: any[]) =>
          users.length
            ? { ...users[0], birthdate: users[0].birthdate?.toDate() }
            : null
        )
      );
  }
}
