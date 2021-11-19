import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {}
  model = new User('JD','jaideep','dahiya','add something here!!',false,true,false,false,'student','0-5','java');
  getUser(){
      return this.model;
  }
  setmodel(x : User){
    this.model = x;
  }
}
