import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {NotifyService} from "./notify.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject('apiURL') private apiURL,
    private http: HttpClient,
    private notifyService: NotifyService,
    private  route: Router) {
  }

  JwtHelperService = new JwtHelper();
  decodedToken: any;
  userToken: any;
  TOKEN_KEY = 'token';


  login(userModel) {
    return this.http.post(this.apiURL + '/login', JSON.stringify(userModel))
      .subscribe(data => {
        const responseData = JSON.parse(JSON.stringify(data));
        if (responseData.type === 'success') {
          this.saveToken(data['token']);
          this.userToken = data['token'];
          this.decodedToken = this.JwtHelperService.decodeToken(data['token']);
          this.notifyService.sendNotify(responseData.message, 'Kapat');
          this.route.navigateByUrl('/anasayfa');
        } else if (responseData.type === 'empty') {
          this.notifyService.sendNotify(responseData.message, 'Kapat');
        } else if (responseData.type === 'error') {
          this.notifyService.sendNotify(responseData.message, 'Kapat');
        }
      });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  getCurrentUserId() {
    return this.JwtHelperService.decodeToken(this.token).id;
  }


}
