import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore,
} from '@angular/fire/compat/firestore';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UserService extends CrudService<User> {
    constructor(afs: AngularFirestore, snackBService: SnackBarService) {
        super(afs, snackBService, 'users');
    }
}