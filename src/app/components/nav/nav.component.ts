import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private apiService: ApiService, private loginService: LoginService, private snackBar: MatSnackBar) {
  }

  settings;
  categories: Object = [];

  ngOnInit() {
    this.getAllCategories();
    this.getSettings();
  }

  get checkLogin() {
    return this.loginService.loggedIn();
  }

  logOut() {
    this.loginService.logOut();
    this.snackBar.open('Oturum başarıyla sonlandırıldı.', 'Tamam', {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }

  getAllCategories() {
    this.apiService.getCategories()
      .subscribe(data => {
        this.categories = data;
      }, err => {
        console.log(err)
      });
  }

  getSettings() {
    this.apiService.getSettings().subscribe(data => {
      this.settings = data;
    })
  }


}
