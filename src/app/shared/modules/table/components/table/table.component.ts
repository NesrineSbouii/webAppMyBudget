import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from 'src/app/shared/models/colum';

@Component({
  selector: 'mybudget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
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

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(data: any): void {
    this.onActionClick.emit(data);
  }

}
