import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostsService} from '../posts.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private route: ActivatedRoute, private service: PostsService) {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => {
          return this.service.get(+params.get('id'));
        })
      .subscribe( post => this.post = post);
  }

  ngOnInit() {
  }

}
