import { Injectable } from '@angular/core';
import {Afiliado} from '../models/afiliado';
import {AFILIADOS} from '../models/afiliados.json';
import {of,Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAfiliadoService {

  constructor() { }

  getafiliado(): Observable<Afiliado> {

    return of(AFILIADOS);
    //return this.http.get<Afiliado[]>(this.urlEndPoint).pipe(
      //map((response)=> response as Afiliado[])
    //);
  }
}
