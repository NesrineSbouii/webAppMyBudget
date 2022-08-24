import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { groupBy, map, mergeMap, Observable } from 'rxjs';
import { Category } from '../../../categories/models/category';
import { CategoryService } from '../../../categories/services/category.service';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../models/group';
import { Project } from '../../../projects/models/project';
import { ProjectService } from '../../../projects/services/project.service';
import { Expense } from '../../../statistics/models/expenses';
import { ExpensesService } from '../../../statistics/services/expenses.service';
import { User } from '../../../users/models/user';
import { UserService } from '../../../users/services/user.service';
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
  expenses$: Observable<Expense[]>;
  data: [];
  projects: Project[];

  projectsNames: string[] = [];
  projectsBudgets: number[] = [];
  projectsExceed: number[] = [];

  constructor(private afs: AngularFirestore, public router: Router, public route: ActivatedRoute, private groupService: GroupService, private categoryService: CategoryService, private projectService: ProjectService, private usersService: UserService, private expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.list();
    this.projects$ = this.projectService.list();
    this.projects$.subscribe((ps: Project[]) => {
      this.projects = ps;
    })
    this.groups$ = this.groupService.list();
    this.users$ = this.usersService.list();
    this.expenses$ = this.expensesService.list();
    this.expenses$.subscribe((expenses: any) => {
      this.data = expenses;
      this.getChartData();
    })
  }


  getChartData() {
    this.projectsNames = [];
    this.projectsBudgets = [];
    this.projectsExceed = [];
    this.projects.map((p: Project) => {
      this.projectsNames.push(p.name);
      this.projectsBudgets.push(p.budget);
      const exceded = this.data.filter((e: Expense) => e.project == p.id).reduce((acc, p: Expense) => { return acc + p.amount }, 0) - p.budget
      this.projectsExceed.push(exceded > 0 ? exceded : 0)
    })

  }
}
