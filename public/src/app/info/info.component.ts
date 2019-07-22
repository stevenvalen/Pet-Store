import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id: any;
  isDisabled: any;
  pet: any;
  pet_skills: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.pet = { name: "" }
    this.isDisabled = false;
    this._route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.getPet();
  }
  getPet() {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      this.pet = data;
      this.pet_skills = data['skills'];
    });
  }
  delete() {
    console.log(this.id);
    let observable = this._httpService.deleteService(this.id);
    observable.subscribe(data => {
      console.log(data);
    });
  }
  likepet() {
    console.log(this.id);
    let observable = this._httpService.likepetService(this.id);
    observable.subscribe(data => {
      this.isDisabled = true;
      console.log(data);
      this.getPet();
    });
  }

}
