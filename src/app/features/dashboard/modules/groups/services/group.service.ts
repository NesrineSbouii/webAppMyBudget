import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore,
} from '@angular/fire/compat/firestore';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Group } from '../../models/group';
import { Auth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class GroupService extends CrudService<Group> {
    constructor(afs: AngularFirestore, snackBService: SnackBarService, authService: Auth) {
        super(afs, snackBService, authService, 'groups');
    }
}