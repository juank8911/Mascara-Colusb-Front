import { Component, OnInit } from '@angular/core';
import {Posts} from '../../../models/posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postss: Posts[];
  post: Posts;
  constructor() { }

  ngOnInit(): void {

  }

  darPost(): void{}

}
