import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TableModule { }
