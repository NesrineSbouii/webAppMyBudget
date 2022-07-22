import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../../categories/models/category';
import { CategoryService } from '../../../categories/services/category.service';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../models/group';
import { Project } from '../../../projects/models/project';
import { ProjectService } from '../../../projects/services/project.service';
import { User } from '../../../users/models/user';
import { UserService } from '../../../users/services/user.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'mybudget-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories$: Observable<Category[]>;
  projects$: Observable<Project[]>;
  groups$: Observable<Group[]>;
  users$: Observable<User[]>;


  constructor(private afs: AngularFirestore, public router: Router, public route: ActivatedRoute, private groupService: GroupService, private categoryService: CategoryService, private projectService: ProjectService, private usersService: UserService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.list();
    this.projects$ = this.projectService.list();
    this.groups$ = this.groupService.list();
    this.users$ = this.usersService.list();

  }
}
