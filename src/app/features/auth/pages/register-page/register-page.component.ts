import { Component, OnInit } from '@angular/core';

import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/features/dashboard/modules/users/services/user.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void { }

  register(data: LoginData) {
    this.authService
      .register(data)
      .then((res: any) => {
        const { uid } = res.user;
        const { email } = data;
        this.userService.add({ uid, email });
        this.router.navigate(['/dashboard/home']);
      })
      .catch((e) => console.log(e.message));
  }
}