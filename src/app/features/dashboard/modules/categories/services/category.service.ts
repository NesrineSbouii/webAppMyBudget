import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore,
} from '@angular/fire/compat/firestore';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Category } from '../models/category';
import { Auth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class CategoryService extends CrudService<Category> {
    constructor(afs: AngularFirestore, snackBService: SnackBarService, authService: Auth) {
        super(afs, snackBService, authService, 'categories');
    }
}