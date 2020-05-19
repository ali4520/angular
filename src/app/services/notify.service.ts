import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  sendNotify(message, action) {
    this.snackBar.open(message, action, {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 3000
    })
  }
}
