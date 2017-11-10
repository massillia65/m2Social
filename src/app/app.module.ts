import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostsModule} from './posts/posts.module';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
