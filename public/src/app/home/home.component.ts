import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_pets: any;
  id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getPets();
  }
  getPets() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.all_pets = data;
    });
  }

}
