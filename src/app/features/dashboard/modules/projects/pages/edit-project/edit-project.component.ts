import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  id: string;
  item: Observable<any>;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id') || '';
        this.item = this.projectService.get(this.id);
      }
    });
  }

  handleUpdate(item: Project): void {
    this.projectService.update({ ...item, id: this.id });
    this.router.navigate(['/dashboard/projects'])
  }
}
