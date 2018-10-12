import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { MaterialModule } from '@shared/material.module';
import { PostsRouting } from './posts.routing';
import { PostEditingComponent } from './post-editing/post-editing.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PagerService} from '@shared/pager.service';

@NgModule({
  imports: [
    CommonModule,
    PostsRouting,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PostsComponent,
    PostEditingComponent,
    PostsListComponent
  ],
  providers: [PostsService, PagerService]
})
export class PostsModule { }
