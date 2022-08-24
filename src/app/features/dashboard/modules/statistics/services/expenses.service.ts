import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore, AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, concatMap, groupBy, map, mergeMap, Observable, of, toArray, zip } from 'rxjs';
import { Group } from '../../models/group';
import { Auth } from '@angular/fire/auth';
import { Expense } from '../models/expenses';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { P } from '@angular/cdk/keycodes';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService extends CrudService<Expense> {

    constructor(afs: AngularFirestore, snackBService: SnackBarService, authService: Auth) {
        super(afs, snackBService, authService, 'expenses');
        this.collection = this.afs.collection<Expense>('expenses');

    }

    override list(): Observable<any> {
        return this.collection.snapshotChanges().pipe(
            map(actions => actions.map((a: any) => {
                const data = a.payload.doc.data();
                return data;
            }))
        );
    }
}