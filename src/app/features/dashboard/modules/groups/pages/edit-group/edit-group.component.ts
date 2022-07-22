import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss'],
})
export class EditGroupComponent implements OnInit {
  id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute, private router: Router,  private groupService: GroupService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id') || '';
        this.itemDoc = this.afs.doc<any>(`groups/${this.id}`);
        this.item = this.itemDoc.valueChanges();
      }
    });
  }

  handleUpdate(item: any): void {
    this.groupService.update({
      ...item, 
      id: this.id,
      project: ''
    });
    this.router.navigate(['/dashboard/groups'])
  }
}
