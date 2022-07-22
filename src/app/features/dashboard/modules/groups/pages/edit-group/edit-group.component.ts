import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from '../../../models/group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss'],
})
export class EditGroupComponent implements OnInit {
  id: string;
  item: Observable<Group>;

  constructor(
    private router: Router,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id') || '';
        this.item = this.groupService.get(this.id);
      }
    });
  }

  handleUpdate(item: Group): void {
    this.groupService.update({ ...item, id: this.id });
    this.router.navigate(['/dashboard/groups']);
  }
}
