import { Component, OnInit } from '@angular/core';
import {PostsServiceService} from '../../../services/posts-service.service'
import {Posts} from '../../../models/posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postss: Posts[];
  post: Posts;
  constructor(private postsService: PostsServiceService) { }

  ngOnInit(): void {
    this.postsService.findAll().subscribe(data =>{
      this.postss = data;
    })
  }

  darPost(): void{
    this.postsService.findOne().subscribe(data=>{
      console.log(data);
      this.post = data;
    })
  }

}
