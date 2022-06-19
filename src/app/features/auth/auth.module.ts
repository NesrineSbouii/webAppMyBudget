import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AuthModule {}