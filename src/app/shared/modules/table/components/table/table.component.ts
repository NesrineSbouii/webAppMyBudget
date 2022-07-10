import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column } from 'src/app/shared/models/colum';

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

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log({ rowData: this.columnsDefs })
  }

  handleClick(data: any): void {
    this.onActionClick.emit(data);
  }

  navigate(element: any) {
    this.router.navigate([element.id, 'edit'], { relativeTo: this.route });
  }
}
