import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AppConfig} from '@core/config';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
