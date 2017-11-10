import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UsersService} from '../users.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  @Input()
  user: User;

  constructor(private route: ActivatedRoute, private service: UsersService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => {
          return this.service.get(+params.get('id'));
        })
      .subscribe( user => this.user = user);
  }

}
