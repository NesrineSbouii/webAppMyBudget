import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})

export class EditCategoryComponent implements OnInit {
  id: string;
  item: Observable<Category>;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id') || '';
        this.item = this.categoryService.get(this.id);
      }
    });
  }

  handleUpdate(item: Category): void {
    this.categoryService.update({ ...item, id: this.id });
    this.router.navigate(['/dashboard/categories'])
  }
}
