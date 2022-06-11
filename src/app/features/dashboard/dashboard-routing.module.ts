import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'categories',
        loadChildren: () => import('./modules/categories/categories.module').then((m) => m.CategoriesModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/project.module').then((m) => m.ProjectModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./modules/statistics/statistics.module').then((m) => m.StatisticsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
