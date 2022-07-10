import { Component, Input, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent implements OnInit {
  id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Hello Create Category !!')
  }
}
