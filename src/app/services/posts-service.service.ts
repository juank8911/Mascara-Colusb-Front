import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Posts} from '../models/posts'



@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  private postsUrl: string;

  constructor(private http: HttpClient) {
this.postsUrl = "http://localhost:8080/afiliado";

}
public findAll(): Observable<Posts[]> {
   return this.http.get<Posts[]>(this.postsUrl+"s");
 }

 public findOne(): Observable<Posts>{
   return this.http.get<Posts>(this.postsUrl);
 }
}
