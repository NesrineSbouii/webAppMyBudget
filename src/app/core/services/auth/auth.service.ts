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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private snackBService: SnackBarService) { }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .catch((error: string) => {
        this.snackBService.openSnackBar(error, 'X');
      });;;
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
}