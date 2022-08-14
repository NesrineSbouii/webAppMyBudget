import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  item: Observable<any>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void { }

  handleCreate(item: Project): void {
    this.projectService.add(item);
    this.router.navigate(['/dashboard/projects']);
  }
}
