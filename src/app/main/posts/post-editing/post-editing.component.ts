import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../posts.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-editing',
  templateUrl: './post-editing.component.html',
  styleUrls: ['./post-editing.component.css']
})
export class PostEditingComponent implements OnInit {
  postForm: FormGroup;
  isNewPost: boolean;
  saving: boolean;
  saved: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    const id = this.activatedRoute.snapshot.params['id'];
    if (id !== 'new') {
      this.getPost(id);
    } else {
      this.isNewPost = true;
    }
  }


  private initForm(data?) {
    const title = data ? data.title : '';
    const body = data ? data.body : '';
    const id = data ? data.id : '';
    const userId = data ? data.userId : '';
    this.postForm = this.fb.group({
      title: [title],
      body: [body],
      userId: userId,
      id: id
    });
  }

  getPost(id) {
    this.postService.getPost(id).subscribe(res => {
      this.initForm(res);
    });
  }

  submit() {
    const body = this.postForm.value;
    this.saving = true;
    this.saved = false;
    if (this.isNewPost) {
      this.postService.createPost(body).subscribe(res => {
        this.saving = false;
        this.saved = true;
      });
    } else {
      this.postService.updatePost(body).subscribe(res => {
        this.saving = false;
        this.saved = true;
      });
    }
  }
}
