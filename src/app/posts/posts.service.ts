import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import 'rxjs/add/operator/retry';
import {Comments} from './comment';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return  (this.http.get<Post[]>('api/posts')
      .retry(3));
  }

  get(id: number): Observable<Post> {
    return (this.http.get<Post>('api/posts/' + id)
      .retry(3));
  }

  getCommentsPost(id: number): Observable<Comments[]> {
    return (this.http.get<Comments[]>('api/posts/' + id + '/comments')
      .retry(3));
  }
}
