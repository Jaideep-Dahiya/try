import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private p : ProfileService) { }


  model:User = {
    d_name : '',
    f_name : '',
    l_name : '',
    designer : false,
    developer : false,
    projectmanager : false,
    sales : false,
    employment : '',
    experience : '',
    expertise : '',
    about : ''
  };
  ngOnInit(): void {
    this.model = this.p.getUser();
  }




  onSubmit(){
    this.p.setmodel(this.model);
    }

}
