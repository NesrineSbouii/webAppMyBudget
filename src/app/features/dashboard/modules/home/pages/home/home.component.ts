import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'mybudget-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories$: Observable<any[]>;
  projects$: Observable<any[]>;
  groups$: Observable<any[]>;
  

  constructor(private afs: AngularFirestore, public router: Router, public route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.categories$ = this.homeService.getCategories();
    this.projects$ = this.homeService.getProjects();
    this.groups$ = this.homeService.getGroups();

  }
}
