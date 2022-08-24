import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore, AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Group } from '../../models/group';
import { Auth } from '@angular/fire/auth';
import { Expenses } from '../models/expenses';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService extends CrudService<Expenses> {
    
    constructor(afs: AngularFirestore, snackBService: SnackBarService, authService: Auth) {
        super(afs, snackBService, authService, 'expenses');
        this.collection = this.afs.collection<Expenses>('expenses');

    }

    override list(): Observable<any> {
        return this.collection.snapshotChanges().pipe(
            map(actions => actions.map((a: any) => {
                const id = a.payload.doc.id;
                const data = a.payload.doc.data();
                const idCategory = data.category?.id;
                const categoryDoc = this.afs.doc<Group>(`categories/${idCategory}`);
                const category = categoryDoc.valueChanges({ idField: 'id' });

                const idUser = data.user?.id;
                const userDoc = this.afs.doc<Group>(`users/${idUser}`);
                const user = userDoc.valueChanges({ idField: 'id' });


                const idProject = data.project?.id;
                const projectDoc = this.afs.doc<Group>(`projects/${idProject}`);
                const project = projectDoc.valueChanges({ idField: 'id' });

                return { ...data, id, category, project, user }
            }))
        );
    }
}