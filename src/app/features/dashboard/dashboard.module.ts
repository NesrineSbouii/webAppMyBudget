import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './container/dashboard.component';
import { CategoriesModule } from './modules/categories/categories.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CategoriesModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class DashboardModule { }
