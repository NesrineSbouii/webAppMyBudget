import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})

export class EditUserComponent implements OnInit {
  id: string;
  item: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id') || '';
        this.item = this.userService.get(this.id);
      }
    });
  }

  handleUpdate(item: User): void {
    this.userService.update({ ...item, id: this.id });
    this.router.navigate(['/dashboard/users'])
  }
}
