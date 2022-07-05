import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from '../material/material.module';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTooltipModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
