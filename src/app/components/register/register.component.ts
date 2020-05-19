import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {Title} from "@angular/platform-browser";
import {NotifyService} from "../../services/notify.service";

class User {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private  titleService: Title,
    private notifyService: NotifyService
  ) {
  }

  title = 'Kayit Ol';
  registerForm: FormGroup;
  userModel: User = new User();

  ngOnInit(): void {
    this.createRegisterForm();
    this.titleService.setTitle(this.title);
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.userModel = Object.assign({}, this.registerForm.value);
    }
    this.apiService.register(this.userModel).subscribe(data=>{
      const responseData = JSON.parse(JSON.stringify(data));
      if(responseData.type === 'ualready'){
        this.notifyService.sendNotify(responseData.message, 'Tamam');
      }else if(responseData.type === 'ealready'){
        this.notifyService.sendNotify(responseData.message, 'Tamam');
      }else if(responseData.type === 'okey'){
        this.notifyService.sendNotify(responseData.message, 'Tamam');
        this.registerForm.reset();
      }else if(responseData.type === 'error'){
        this.notifyService.sendNotify(responseData.message, 'Tamam');
      }
    })

  }

}
