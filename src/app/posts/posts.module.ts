import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRootComponent } from './posts-root/posts-root.component';
import { PostsListeComponent } from './posts-liste/posts-liste.component';
import {PostsService} from './posts.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { UsersListeComponent } from './users-liste/users-liste.component';
import {UsersService} from './users.service';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routesChild: Routes = [
  {path: 'posts', component: PostsRootComponent,
    children: [
      {
        path: 'listePosts/:id',
        component: PostsDetailsComponent
      },
      {
        path: 'listePosts',
        component: PostsListeComponent
      },
      {
        path: 'listeUsers',
        component: UsersListeComponent
      },
      {
        path: 'listeUsers/:id',
        component: UsersDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routesChild)
  ],
  exports: [
    PostsRootComponent,
  ],
  declarations: [PostsRootComponent, PostsListeComponent, PostsDetailsComponent, UsersListeComponent, UsersDetailsComponent],
  providers: [PostsService, UsersService]
})
export class PostsModule { }
