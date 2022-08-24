import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from 'src/app/features/dashboard/modules/groups/services/group.service';
import { Column } from 'src/app/shared/models/colum';
import { Group} from 'src/app/features/dashboard/modules/models/group'
@Component({
  selector: 'mybudget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

/**
 * @title Basic use of `<table mat-table>`
 */
export class TableComponent implements OnInit {
  @Input() rowData: any;
  @Input() columnsDefs: Column[];
  @Input() tableOptions: any;
  @Input() displayedColumns: string[];
  @Input() actions: any[];

  @Output() onActionClick = new EventEmitter();

  constructor(public router: Router, public route: ActivatedRoute, private groupService: GroupService) {
  }

  ngOnInit(): void {
  }

  handleClick(data: any): void {
    this.onActionClick.emit(data);
  }

  navigate(element: any) {
    this.router.navigate([element.id, 'edit'], { relativeTo: this.route });
  }

}
