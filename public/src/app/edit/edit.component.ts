import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  id: any;
  edit_pet: any
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.edit_pet = { name: "", type: "", description: "", skills: [{ skill: "" }, { skill: "" }, { skill: "" }] };
    this._route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.getPet();
  }
  getPet() {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      this.pet = data;
      this.edit_pet = data;
    });
  }
  edit() {
    let observable = this._httpService.editService(this.edit_pet, this.id);
    observable.subscribe(data => {
      console.log(data);
      this.edit_pet = { name: "", type: "", description: "", skills: [{ skill: "" }, { skill: "" }, { skill: "" }] };;
    })
  }

}