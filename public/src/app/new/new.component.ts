import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_pet: any;
  all_pets: any;
  isDuplicate: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.isDuplicate = false;
    this.getPets()

    this.new_pet = { name: "", type: "", description: "", skills: [{ skill: "" }, { skill: "" }, { skill: "" }] };
  }
  addPet() {
    console.log(this.new_pet);
    let observable = this._httpService.add(this.new_pet);
    observable.subscribe(data => {
      this.new_pet = { name: "", type: "", description: "" };
      console.log(data);
    });
  }
  getPets() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.all_pets = data;
    });
  }
  changeName() {
    console.log("fired");
    this.isDuplicate = true;
  }
}
