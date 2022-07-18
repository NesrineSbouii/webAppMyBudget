import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  action: string = 'X';
  dataChange = new Subject<any>();

  constructor(private snackBar: MatSnackBar) {
    this.detectChanges();
  }

  detectChanges(): void {
    this.dataChange.subscribe(({ operation, type }) => {
      let messages: { [key: string]: any } = {
        success: {
          add: 'successful creation',
          update: 'update successfully',
          delete: 'successfully deleted'
        },
        error: {
          add: 'creation error',
          update: 'update error',
          delete: 'deletion error',
        }
      };
      this.openSnackBar(messages[type][operation], this.action);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}