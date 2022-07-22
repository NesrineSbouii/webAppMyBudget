import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { SnackBarService } from '../snackbar/snackbar.service';
import { LoginData } from '../../interfaces/login-data.interface';
import { UserService } from 'src/app/features/dashboard/modules/users/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/features/dashboard/modules/users/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private snackBService: SnackBarService, private userService: UserService) { }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .catch((error: string) => {
        this.snackBService.openSnackBar(error, 'X');
      });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .catch((error: string) => {
        this.snackBService.openSnackBar(error, 'X');
      });;
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .catch((error: string) => {
        this.snackBService.openSnackBar(error, 'X');
      });
  }

  logout() {
    return signOut(this.auth);
  }

  currentUser(): Observable<User[]> {
    const currentUser =  this.auth.currentUser;
    const uid = currentUser?.uid;
    return this.userService.getUserBy('uid', uid);
  }
}