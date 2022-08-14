import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { Column } from 'src/app/shared/models/colum';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'mybudget-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  items: Observable<Project[]>;
  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Project Name', content: 'name' },
  ];
  displayedColumns = ['name', 'budget', 'group', 'actions'];
  tableOptions = { actions: [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }] };

  constructor(private projectService: ProjectService, public router: Router, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.items = this.projectService.list();
  }

  handleCreate(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
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

  openDeleteDialog(data: Project): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: { id: data.id, title: 'Delete', description: 'Are you sure you want to delete this category?' },
    });

    dialogRef.componentInstance.onDelete.subscribe(el => {
      this.projectService.delete(el.id);
      dialogRef.close();
    })
  }
}
