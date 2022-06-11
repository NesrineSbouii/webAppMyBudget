import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }