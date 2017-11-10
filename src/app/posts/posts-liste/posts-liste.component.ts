import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts-liste',
  templateUrl: './posts-liste.component.html',
  styleUrls: ['./posts-liste.component.css']
})
export class PostsListeComponent implements OnInit {

  posts: Post[];

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe(posts => this.posts = posts);
  }

}
