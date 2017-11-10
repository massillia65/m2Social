import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-liste',
  templateUrl: './users-liste.component.html',
  styleUrls: ['./users-liste.component.css']
})
export class UsersListeComponent implements OnInit {

  users: User[];

  constructor(private serviceUser: UsersService) { }

  ngOnInit(){
    this.serviceUser.getAllUsers().subscribe(users => this.users = users);
  }

}
