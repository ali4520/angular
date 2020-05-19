import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../services/login.service";
import {NgForm} from "@angular/forms";
import {NotifyService} from "../../services/notify.service";


class myComment {
  text: string;
  postID: string;
  userID: string;
}

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {


  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public loginService: LoginService,
    private notifyService: NotifyService,
    private  route: Router
  ) {
  }

  commentModel: myComment = new myComment();
  title: any;
  details: any;
  userData: any;
  comments: any;

  @ViewChild('sendForm') form

  ngOnInit() {
    this.getPostDetail();
    if (this.checkLogin) {
      this.userData = this.loginService.getCurrentUserId();
    }
    this.getComments();
  }

  get checkLogin() {
    return this.loginService.loggedIn();
  }

  sendComment(form: NgForm) {
    this.commentModel.postID = this.details?.id;
    this.commentModel.userID = this.loginService.getCurrentUserId();
    this.apiService.sendComment(this.commentModel)
      .subscribe(data => {
        const responseData = JSON.parse(JSON.stringify(data));
        this.notifyService.sendNotify(responseData.message, 'Tamam');
      })
    this.form.reset();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }

  getPostDetail() {
    this.activatedRoute.params.subscribe(params => {
      this.apiService.getPostDetail(params.slug)
        .subscribe(data => {
          this.title = data['title'];
          this.details = data;
          this.titleService.setTitle(this.title);
        })
    })

  }

  getComments() {
    this.activatedRoute.params.subscribe(params => {
      this.apiService.postComments(params.slug)
        .subscribe(data => {
          this.comments = data;
        })
    })
  }


}
