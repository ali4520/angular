import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {
  }

  category;
  socialArea;

  ngOnInit() {
    this.limitedCategory();
    this.SocialLinks();
  }

  limitedCategory() {
    this.apiService.limitedCategory().subscribe(data => {
      this.category = data;
    })
  }

  SocialLinks() {
    this.apiService.getSettings().subscribe(data => {
      this.socialArea = data;
    })
  }

}
