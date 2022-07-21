import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import {
    AngularFirestore, AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { SnackBarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Project } from '../models/project';
import { BehaviorSubject, combineLatest, concat, concatMap, forkJoin, map, mergeAll, mergeMap, Observable, of, Subject, switchMap, take, zip } from 'rxjs';
import { Group } from '../../models/group';
import { group } from 'console';

@Injectable({
    providedIn: 'root',
})
export class ProjectService extends CrudService<Project> {
    group = new BehaviorSubject<any | null>(null);

    constructor(afs: AngularFirestore, snackBService: SnackBarService) {
        super(afs, snackBService, 'projects');
        this.collection = this.afs.collection<Project>('projects');

    }

   /*  override list(): any {
        return this.collection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const id = a.payload.doc.id;
                const data = a.payload.doc.data() as any;
                const refId = data.group?.id;
                const groupDoc = this.afs.doc<Group>(`groups/${refId}`);
                groupDoc.valueChanges({ idField: 'id' }).subscribe((group) => {
                    console.log({ group })
                    this.group.next(group)
                    console.log({ val: this.group.value})
                })

                return { ...data, group: this.group.value, id } as Project
            })
            )
        )
    } */
}