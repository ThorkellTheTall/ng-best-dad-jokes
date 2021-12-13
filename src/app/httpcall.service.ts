import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpcallService {

  constructor(
    private httpClient: HttpClient, private router:Router,
  ) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:3001/posts')
  }
}
