import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IPost} from '@models/post';
import {PostsService} from '../posts.service';
import {Router} from '@angular/router';
import {AppConfig} from '@core/config';
import {PagerService} from '@shared/pager.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: IPost[];
  deleting: boolean;
  currentIndex: number;
  pager: any = {};
  pagedItems: IPost[];
  currentPage: number;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private pagerService: PagerService) { }

  ngOnInit() {
    this.getPosts();
  }

  /**
   * API requests
   */
  public getPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.setPage(1);
    });
  }
  public editPost(post) {
    this.router.navigate([AppConfig.routes.posts, post.id]);
  }
  public deletePost(post, index) {
    this.deleting = true;
    this.currentIndex = index;
    this.postsService.deletePost(post).subscribe(res => {
      this.deleting = false;
      this.posts = this.posts.filter(one_post => one_post.id !== post.id);
      this.setPage(this.currentPage);
    });
  }
  createPost() {
    this.router.navigate([AppConfig.routes.posts, 'new']);
  }

  /**
   * Paginator
   */
  setPage(page: number, pageSize = 5) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.posts.length, page, pageSize);
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.currentPage = page;
  }
  pageEvent(event: PageEvent) {
    this.setPage(event.pageIndex + 1, event.pageSize);
  }

}
