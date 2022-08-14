import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  id: string;
  item: Observable<any>;

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  handleCreate(item: Category): void {
    this.categoryService.add(item);
    this.router.navigate(['/dashboard/categories']);
  }
}
