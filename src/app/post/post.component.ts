import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { HttpcallService } from '../httpcall.service';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  // posts: Post[] = [] ;
  post?: Post;
  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    // this.httpcallService.getPosts().subscribe((res) => {
    //   this.posts = res
    // });
    this.post = this.posts.find((post) => post.id === +this.route.queryParams.subscribe(params => {
      params['id'];
    }));
  } 
}
