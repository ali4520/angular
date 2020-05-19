import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotifyService} from "../../services/notify.service";

class Contact {
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService
  ) {
  }

  about: any;
  contactForm: FormGroup;
  contactModel: Contact = new Contact()

  ngOnInit(): void {
    this.getAbout();
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  getAbout() {
    this.apiService.getSettings().subscribe(data => {
      this.about = data;
    });
  }

  sendContact() {
    if (this.contactForm.valid) {
      this.contactModel = Object.assign({}, this.contactForm.value);
    }
    this.apiService.sendContact(this.contactModel).subscribe(data => {
      this.notifyService.sendNotify('Mesajınız başarıyla gönderilmiştir.', 'Kapat');
      this.contactForm.reset();
    })
  }

}
