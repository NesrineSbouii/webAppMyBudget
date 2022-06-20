import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id') || '';
        this.itemDoc = this.afs.doc<any>(`categories/${this.id}`);
        this.item = this.itemDoc.valueChanges();
      }
    });
  }
}
