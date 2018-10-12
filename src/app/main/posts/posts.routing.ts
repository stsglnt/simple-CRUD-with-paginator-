import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostEditingComponent} from './post-editing/post-editing.component';
import {AppConfig} from '@core/config';
import {PostsListComponent} from './posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children : [
      {path: '', component: PostsListComponent},
      {path: ':id', component: PostEditingComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRouting { }
