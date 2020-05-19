import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {stringify} from "querystring";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject('apiURL') private apiURL, private http: HttpClient) {
  }


  getCategories() {
    return this.http.get(this.apiURL + '/getCategories');
  }

  getCategoryBySlug(slug) {
    return this.http.get(this.apiURL + '/getCategoryBySlug/' + slug);
  }

  getCategoryPosts(id) {
    return this.http.get(this.apiURL + '/getCategoryPosts/' + id);
  }

  getSettings() {
    return this.http.get(this.apiURL + '/getSettings');
  }

  getSliderPost() {
    return this.http.get(this.apiURL + '/sliderPost');
  }

  getAllPost() {
    return this.http.get(this.apiURL + '/getAllPost');
  }

  getPostDetail(slug) {
    return this.http.get(this.apiURL + '/getPostDetail/' + slug);
  }

  getRecommented() {
    return this.http.get(this.apiURL + '/getRecommended');
  }

  limitedCategory() {
    return this.http.get(this.apiURL + '/limitedCategory');
  }

  postComments(slug) {
    return this.http.get(this.apiURL + '/getComments/' + slug)
  }


  sendComment(data) {
    return this.http.post(this.apiURL + '/sendComment', JSON.stringify(data));
  }

  register(data) {
    return this.http.post(this.apiURL + '/register', JSON.stringify(data));
  }

  sendContact(data) {
    return this.http.post(this.apiURL + '/sendContact', JSON.stringify(data));
  }
}
