import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PieComponent } from './components/pie/pie.component';
import { StackedBarComponent } from './components/stacked-bar/stacked-bar.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    PieComponent,
    StackedBarComponent,
    StatsCardComponent
  ],
  entryComponents: [TitleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class HomeModule { }
