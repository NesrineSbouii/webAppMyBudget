import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from '../material/material.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [TableComponent]
})
export class TableModule { }
