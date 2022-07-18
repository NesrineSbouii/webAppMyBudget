import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from 'src/app/shared/models/colum';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'mybudget-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  collectionName = 'categories';
  items: Observable<any[]>;

  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Category name', content: 'name' },
    { header: 'Category Budget', content: 'budget' },
  ];
  displayedColumns = ['id', 'icon', 'color', 'name', 'budget', 'actions'];
  tableOptions = { actions: [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }] };

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.items = this.categoryService.list();
  }

  handleActionClick(data: any): void {
    const { name, element } = data;

    switch (name) {
      case 'edit': this.router.navigate([element.id, 'edit'], { relativeTo: this.route })
        break;
      case 'delete': this.openDeleteDialog(element)
        break;
      case 'info': console.log('Infos!!')
        break;
      default:
        break;
    }
  }

  handleCreate(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  openDeleteDialog(data: Category): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: { id: data.id, title: 'Delete', description: 'Are you sure you want to delete this category?' },
    });

    dialogRef.componentInstance.onDelete.subscribe(el => {
      this.categoryService.delete(el.id);
      dialogRef.close();
    })
  }
}

