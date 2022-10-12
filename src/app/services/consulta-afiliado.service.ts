import { Injectable } from '@angular/core';
import {Afiliado} from '../models/afiliado';
import {TokenReq} from '../models/token-req';
import {Observable} from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {AfiliadoSh} from '../models/afiliado-sh.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAfiliadoService {

  headers = new HttpHeaders;
  url:string = "https://colsubsidio-test.apigee.net/oauth/client_credential/accesstoken?grant_type=client_credentials";
  urlLoc:string = "http://localhost:8080/token"
  uri:string = "https://colsubsidio-test.apigee.net/api/";
  uriSh:String = "/v2/afiliacion/validador?";
  body:{
    clienteId: "sD68JKGm4GeAb8lFva22v7OgCBSXfcbj",

    clienteSecreto: "9yXLfPgaxBAYEGSl"
  }

  tokenrq: TokenReq;


  constructor(private http: HttpClient) { }

  getafiliado(): Observable<Afiliado> {

   return this.http.get<Afiliado>('http://localhost:8080/afiliado/CO1C/1018497540',{headers:this.headers});
    //return this.http.get<Afiliado[]>(this.urlEndPoint).pipe(
      //map((response)=> response as Afiliado[])
    //);
  }

serviceToken(): Observable<TokenReq>
{
    this.headers.set('Access-Control-Allow-Origin', '**');
    this.headers.set('grant_type', 'client_credentials');
    this.headers.set('Access-Control-Allow-Origin','true');

 return this.http.post<TokenReq>(this.urlLoc,this.body, {headers:this.headers} )

}

getAfiliadoApi(formsh:AfiliadoSh):Observable<Afiliado>
{
  // const httpOptions = {Headers: new HttpHeaders({'Authorization':'Bearer ER1QiA5uXeHlH4uAmSa8DcRZi909'})}
  // this.headers.set('Access-Control-Allow-Origin', '**');
  // this.headers.set('Authorization','Bearer ER1QiA5uXeHlH4uAmSa8DcRZi909');
  this.headers.set('Access-Control-Allow-Origin','true');
  return this.http.get<Afiliado>('http://localhost:8080/afiliado/'+formsh.tipoId+"/"+formsh.numeroId,{headers:this.headers});
}
}
