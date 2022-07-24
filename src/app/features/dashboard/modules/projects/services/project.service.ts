import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore, AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Project } from '../models/project';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Group } from '../../models/group';

@Injectable({
    providedIn: 'root',
})
export class ProjectService extends CrudService<Project> {
    groups = new BehaviorSubject<any | null>(null);

    constructor(afs: AngularFirestore, snackBService: SnackBarService) {
        super(afs, snackBService, 'projects');
        this.collection = this.afs.collection<Project>('projects');

    }

    override list(): Observable<any> {
        return this.collection.snapshotChanges().pipe(
            map(actions => actions.map((a: any) => {
                const id = a.payload.doc.id;
                const data = a.payload.doc.data();
                const refId = data.group?.id;
                const groupDoc = this.afs.doc<Group>(`groups/${refId}`);
                const group = groupDoc.valueChanges({ idField: 'id' });

                return { ...data, id, group }
            }))
        );
    }
}