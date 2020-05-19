import {Component, Inject, NgModule, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title;
  posts;
  p: number = 1;

  constructor(
    @Inject('perPage') public perPage,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.getCategoryInfo();
  }

  getCategoryInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.apiService.getCategoryBySlug(params.slug)
        .subscribe(data => {
          this.title = data['name'];
          this.getCategoryPosts(data['id']);
          this.titleService.setTitle(this.title);
        })
    })
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  getCategoryPosts(id) {
    this.apiService.getCategoryPosts(id)
      .subscribe(data => {
        this.p = 1;
        this.posts = data;
      })
  }


}
