import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {
  }

  recommented;

  ngOnInit(): void {
    this.getRecommented();
  }

  getRecommented() {
    this.apiService.getRecommented()
      .subscribe(data => {
        this.recommented = data;
      })
  }


}
