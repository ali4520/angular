import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Title} from "@angular/platform-browser";

class User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private titleService: Title
  ) {
  }

  title = 'Giriş Yap';
  loginForm: FormGroup;
  userModel: User = new User();


  ngOnInit(): void {
    this.createLoginForm();
    this.titleService.setTitle(this.title)
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userModel = Object.assign({}, this.loginForm.value);
    }
    this.loginService.login(this.userModel);
    this.loginForm.reset();
  }


}
