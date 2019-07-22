import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll() {
    return this._http.get('/api/pet');
  }
  getOne(id) {
    return this._http.get(`/api/pet/${id}`);
  }
  editService(forminfo, id) {
    return this._http.put(`/api/pet/${id}`, forminfo);
  }
  add(forminfo) {
    return this._http.post('/api/pet', forminfo);
  }
  deleteService(id) {
    return this._http.delete(`/api/pet/${id}`);

  }
  likepetService(id) {
    return this._http.put(`/api/pet/like/${id}`, id)
  }
}
