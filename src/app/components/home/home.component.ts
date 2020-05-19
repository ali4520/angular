import {Component, Inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ApiService} from "../../services/api.service";
import {NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject('perPage') public perPage,
    private titleService: Title,
    private apiService: ApiService
  ) {
  }

  title = 'Anasayfa';
  slider;
  homePost;
  p: number = 1;


  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getSliderPost();
    this.getAllPost();
  }

  getSliderPost() {
    this.apiService.getSliderPost().subscribe(data => {
      this.slider = data;
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  getAllPost() {
    this.apiService.getAllPost().subscribe(data => {
      this.homePost = data;
    })
  }
}
